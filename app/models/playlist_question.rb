class PlaylistQuestion < ApplicationRecord
  belongs_to :playlist
  has_many :question, :through => :playlist_questions, :source => :question_id
end
