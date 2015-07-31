# == Schema Information
#
# Table name: objectives
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Objective < ActiveRecord::Base
  has_many :skill_groups

  after_create do
    SkillGroup.create!(
      SkillGroup::TYPES.values.map {|type| {type: type, objective_id: self.id}}
    )
  end

  def pre_requisite_skills
    skill_groups.pre_requisite.skills
  end

  def current_skills
    skill_groups.current.skills
  end

  def growth_skills
    skill_groups.growth.skills
  end
end
