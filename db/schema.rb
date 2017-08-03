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

ActiveRecord::Schema.define(version: 20170803015128) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "searches", force: :cascade do |t|
    t.string   "companyname"
    t.string   "employeename"
    t.string   "country"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "tweets", force: :cascade do |t|
    t.text     "body"
    t.float    "score"
    t.integer  "user_id"
    t.string   "sentiment"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "search_term"
    t.string   "username"
    t.float    "location"
    t.date     "date"
    t.string   "query"
    t.integer  "limit"
    t.string   "type"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "business"
    t.string   "search"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email"
    t.string   "password_digest"
  end

end
