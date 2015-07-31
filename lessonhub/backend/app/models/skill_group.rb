# == Schema Information
#
# Table name: skill_groups
#
#  id           :integer          not null, primary key
#  objective_id :integer
#  type         :string           not null
#
# Indexes
#
#  index_skill_groups_on_objective_id  (objective_id)
#

class SkillGroup < ActiveRecord::Base
  self.inheritance_column = :__disabled # disable STI
  belongs_to :objective
  has_and_belongs_to_many :skills

  TYPES = {
    pre_requisite: 'pre-requisite',
    current: 'current',
    growth: 'growth'
  }
  validates_inclusion_of :type, in: TYPES.values

  scope :pre_requisite, -> { find_by(type: TYPES[:pre_requisite]) }
  scope :current, -> { find_by(type: TYPES[:current]) }
  scope :growth, -> { find_by(type: TYPES[:growth]) }
end
