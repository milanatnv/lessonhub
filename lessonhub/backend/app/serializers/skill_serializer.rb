class SkillSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  has_many :lessons, embed: :ids
end
