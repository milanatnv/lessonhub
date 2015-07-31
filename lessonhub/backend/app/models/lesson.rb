# == Schema Information
#
# Table name: lessons
#
#  id         :integer          not null, primary key
#  title      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Lesson < ActiveRecord::Base
  has_and_belongs_to_many :skills
end
