class AddSkillGroups < ActiveRecord::Migration
  def change
    create_table :skill_groups do |t|
      t.belongs_to :objective, index: true
      t.string :type, null: false
    end

    create_table :skill_groups_skills do |t|
      t.belongs_to :skill_group, index: true
      t.belongs_to :skill, index: true
    end
  end
end
