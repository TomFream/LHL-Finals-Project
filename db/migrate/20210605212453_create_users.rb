class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :asked_questions, array: true
      t.integer :correctly_answered, array: true
      t.integer :incorrectly_answered, array: true
      t.integer :playlist_id, array: true

      t.timestamps
    end
  end
end
