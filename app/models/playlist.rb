class Playlist < ApplicationRecord
  has_many :playlist_questions
  has_many :question, through: :playlist_questions   #check//TODO
  belongs_to :user
end
