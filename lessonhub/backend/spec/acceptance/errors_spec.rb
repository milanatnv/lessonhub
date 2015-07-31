require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Errors" do
  header "Accept", "application/json"

  before :all do
    @skills = [
      {id: 1, title: "3.NF.A.1", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b."}
    ]
    Skill.create!(@skills)
  end

  get "/api/v1/skills/non-existent" do
    example "Error message for non-existent record" do
      do_request

      expect(status).to eq(404)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(Api::V1::ErrorMessages::RecordNotFound)
    end
  end

  get "/api/v1/non-existent" do
    example "Error message for non-existent URL" do
      do_request

      expect(status).to eq(404)
      expect(response_headers["Content-Type"]).to match("application/json")
      expect(response_json).to eq(Api::V1::ErrorMessages::RoutingError)
    end
  end
end
