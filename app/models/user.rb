class User < ApplicationRecord
  has_many :playlists
  #add validation
end
