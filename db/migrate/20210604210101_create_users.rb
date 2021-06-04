class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user
      t.string :password
      t.string :email
      t.string :question_asked
      t.string :question_correct
      t.string :question_wrong

      t.timestamps
    end
  end
end
