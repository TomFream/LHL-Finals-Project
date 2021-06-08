class CreateAnswerOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :answer_options do |t|
      t.references :question, null: false, add_foreign_key: true
      t.text :answer_option
      t.boolean :is_correct
      t.timestamps
    end
  end
end
