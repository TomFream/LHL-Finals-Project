class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.references :user, null: false, add_foreign_key: true
      t.string :name
      
      t.timestamps
    end
  end
end
