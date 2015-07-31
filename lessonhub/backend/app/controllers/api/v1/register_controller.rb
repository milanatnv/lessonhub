require_dependency "api/v1/external_user_data"

class Api::V1::RegisterController < ApplicationController
  ExternalUserData  = Api::V1::ExternalUserData

  protect_from_forgery except: [:start, :finish], with: :exception

  def start
    user = User.find_or_create_by(ExternalUserData.decrypt(params[:data]).merge({
      status: User::STATUSES[:pending]
    }))

    if user.invalid?
      handle_registration_errors(user)
      return
    end
    session[:user_id] = user.id

    render json: user
  rescue ExternalUserData::InvalidBase64String
    render json: {error: "invalid encrypted data"}, status: 422
  end

  def finish
    user = User.find_by_session(session)
    user.activate!(params)
    login(user.email, params[:password], remember = true)

  rescue ActiveRecord::RecordNotFound
    render json: {error: "missing user data, please register first"}, status: 422
  rescue User::PasswordInvalidOrMissing
    render json: {error: "password is invalid or missing"}, status: 422
  else
    render json: {}
  end

  private

    def handle_registration_errors(user)
      render json: {
        errors: user.errors.messages.map {|k,v| "#{k} #{v.join('')}"}
      }, status: 422
    end
end
