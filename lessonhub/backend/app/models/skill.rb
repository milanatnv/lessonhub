# == Schema Information
#
# Table name: skills
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Skill < ActiveRecord::Base
  has_and_belongs_to_many :lessons
  
  default_scope { order('title ASC') }
end
