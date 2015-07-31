require_dependency "api/v1/error_messages"

class Api::V1::BaseController < ApplicationController
  ROUTING_ERRORS = [ActionController::RoutingError,
                    ActionController::UnknownController,
                    AbstractController::ActionNotFound]

  ErrorMessages     = Api::V1::ErrorMessages

  rescue_from ActiveRecord::RecordNotFound do
    render json: ErrorMessages::RecordNotFound, status: 404
  end

  rescue_from *ROUTING_ERRORS do
    render json: ErrorMessages::RoutingError, status: 404
  end

  def routing_error
    raise ActionController::RoutingError.new(params[:path])
  end
end
