require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Skills" do
  before :all do
    Lesson.create!([
      {id: 1, title: "Know number names and the count sequence"},
      {id: 2, title: "Count to tell number of objects"},
    ])

    @skills = [
      {id: 1, title: "3.NF.A.2", description: "Understand a fraction as a number on the number line; represent fractions on a number line diagram.", lesson_ids: [1]},
      {id: 2, title: "3.NF.A.1", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b.", lesson_ids: [1, 2]},
    ]
    Skill.create!(@skills)
  end

  header "Accept", "application/json"

  get "/api/v1/skills" do
    example "Listing all skills" do
      do_request

      expect(status).to eq(200)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(skills: @skills.reverse)
    end
  end

  get "/api/v1/skills/:id" do
    let(:id) { @skills.last[:id] }

    example "Listing specific skill" do
      do_request

      expect(status).to eq(200)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(skill: @skills.last)
    end
  end
end
