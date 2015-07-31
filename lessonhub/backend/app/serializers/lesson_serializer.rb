class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :skills, embed: :ids, serializer: BasicSkillSerializer
end
