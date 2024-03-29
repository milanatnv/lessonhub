class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :status, null: false, default: 'pending'

      t.timestamps null: false
    end
  end
end
