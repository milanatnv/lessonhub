class Api::V1::LessonsController < Api::V1::BaseController
  def index
    render json: Lesson.all
  end

  def show
    render json: Lesson.find(params[:id])
  end
end
