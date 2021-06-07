class CreatePlaylistQuestion < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_questions do |t|
      t.belongs_to :questions
      t.timestamps
    end
  end
end
