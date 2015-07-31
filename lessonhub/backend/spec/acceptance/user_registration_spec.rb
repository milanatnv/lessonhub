require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "User registration" do
  header "Accept", "application/json"

  describe "Starting registration" do

    post "/api/v1/decrypt-user-data" do
      example "Valid registration", document: false do
        expect {
          do_request(
            data: "bWFyeS5zbWl0aEBiYWlsZXltaWRkbGVzY2hvb2wuY29t&TWFyeQ==&U21pdGg="
          )
        }.to change{ User.count }.from(0).to(1)

        expect(status).to eq(200)
        expect(response_headers["Content-Type"]).to match("application/json")
        expect(response_json).to eq(user: {
          email: "mary.smith@baileymiddleschool.com",
          name: "Mary Smith"
        })
        expect(session[:user_id]).to eq(User.last.id)
      end

      example "Error message for invalid data", document: false do
        do_request(
          data: "fffff"
        )
        expect(User.count).to eq(0)

        expect(status).to eq(422)
        expect(response_headers["Content-Type"]).to match("application/json")
        expect(response_json).to eq({error: "invalid encrypted data"})
      end

      example "Error message for no data", document: false do
        do_request

        expect(status).to eq(422)
        expect(response_headers["Content-Type"]).to match("application/json")
        expect(response_json).to eq({error: "invalid encrypted data"})
      end

      example "Error message when trying to register as an active user", document: false do
        User.create({
          email: 'mary.smith@baileymiddleschool.com',
          name: 'Mary Smith',
          status: User::STATUSES[:active]
        })
        do_request(
          data: "bWFyeS5zbWl0aEBiYWlsZXltaWRkbGVzY2hvb2wuY29t&TWFyeQ==&U21pdGg="
        )

        expect(status).to eq(422)
        expect(response_headers["Content-Type"]).to match("application/json")
        expect(response_json).to eq({errors: ["email has already been taken"]})
      end
    end
  end

  describe Api::V1::RegisterController, type: :controller do
    # We're using controller specs here since RspecApiDocumentation and Rack::Test
    # don't allow us to set sessions without some very dirty hacks.
    post "/api/v1/register" do
      example "Valid registration", document: false do
        User.create({
          email: 'mary.smith@baileymiddleschool.com',
          name: 'Mary Smith'
        })

        post :finish, {
          password: 'password',
          password_confirmation: 'password'
        }, {user_id: User.last.id}

        expect(response.body).to eq({}.to_json)
        expect(response.status).to eq(200)
      end

      example "Invalid registration - session data is missing", document: false do
        User.create({
          email: 'mary.smith@baileymiddleschool.com',
          name: 'Mary Smith'
        })

        post :finish, {
          password: 'password',
          password_confirmation: 'password'
        }

        expect(response.body).to eq({error: "missing user data, please register first"}.to_json)
        expect(response.status).to eq(422)
      end

      example "Invalid registration - invalid params", document: false do
        User.create({
          email: 'mary.smith@baileymiddleschool.com',
          name: 'Mary Smith'
        })

        post :finish, {
          password: 'password',
          password_confirmation: 'POW!'
        }, {user_id: User.last.id}

        expect(response.body).to eq({error: "password is invalid or missing"}.to_json)
        expect(response.status).to eq(422)
      end
    end
  end
end
