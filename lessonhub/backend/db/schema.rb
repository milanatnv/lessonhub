# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150209150513) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lessons", force: :cascade do |t|
    t.text     "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lessons_skills", id: false, force: :cascade do |t|
    t.integer "skill_id"
    t.integer "lesson_id"
  end

  add_index "lessons_skills", ["lesson_id"], name: "index_lessons_skills_on_lesson_id", using: :btree
  add_index "lessons_skills", ["skill_id"], name: "index_lessons_skills_on_skill_id", using: :btree

  create_table "objectives", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "skill_groups", force: :cascade do |t|
    t.integer "objective_id"
    t.string  "type",         null: false
  end

  add_index "skill_groups", ["objective_id"], name: "index_skill_groups_on_objective_id", using: :btree

  create_table "skill_groups_skills", force: :cascade do |t|
    t.integer "skill_group_id"
    t.integer "skill_id"
  end

  add_index "skill_groups_skills", ["skill_group_id"], name: "index_skill_groups_skills_on_skill_group_id", using: :btree
  add_index "skill_groups_skills", ["skill_id"], name: "index_skill_groups_skills_on_skill_id", using: :btree

  create_table "skills", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                null: false
    t.string   "name",                                 null: false
    t.string   "status",           default: "pending", null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.string   "state"
    t.string   "crypted_password"
    t.string   "salt"
  end

end
