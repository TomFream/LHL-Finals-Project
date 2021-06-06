class Playlist < ApplicationRecord
  has_many :playlist_questions
  belongs_to :user
end
