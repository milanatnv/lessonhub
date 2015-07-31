class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.text :title

      t.timestamps null: false
    end

    create_table :lessons_skills, id: false do |t|
      t.belongs_to :skill, index: true
      t.belongs_to :lesson, index: true
    end
  end
end
