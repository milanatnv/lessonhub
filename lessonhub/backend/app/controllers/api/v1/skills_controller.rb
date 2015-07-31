class Api::V1::SkillsController < Api::V1::BaseController
  def index
    render json: Skill.all
  end

  def show
    render json: Skill.find(params[:id])
  end
end
