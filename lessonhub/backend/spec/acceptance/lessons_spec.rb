require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Lessons" do
  before :all do
    Skill.create!([
      {id: 1, title: "3.NF.A.1", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b."},
      {id: 2, title: "3.NF.A.2", description: "Understand a fraction as a number on the number line; represent fractions on a number line diagram."},
    ])

    @lessons = [
      {id: 1, skill_ids: [ 1 ], title: "Know number names and the count sequence"},
      {id: 2, skill_ids: [ 1, 2 ], title: "Count to tell number of objects"},
    ]
    Lesson.create!(@lessons)
  end

  header "Accept", "application/json"

  get "/api/v1/lessons" do
    example "Listing all lessons" do
      do_request

      expect(status).to eq(200)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(lessons: @lessons)
    end
  end

  get "/api/v1/lessons/:id" do
    let(:id) { @lessons.last[:id] }

    example "Listing specific lesson" do
      do_request

      expect(status).to eq(200)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(lesson: @lessons.last)
    end
  end
end
