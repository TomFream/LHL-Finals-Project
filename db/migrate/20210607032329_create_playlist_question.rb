class CreatePlaylistQuestion < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_questions do |t|
      t.references :question, null: false, add_foreign_key: true
      t.references :playlist, null: false, add_foreign_key: true
      t.timestamps
    end
  end
end
