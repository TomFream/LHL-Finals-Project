class User < ApplicationRecord
  has_secure_password
  has_many :playlists
  #add validation
  validates_presence_of :name
  validates_uniqueness_of :name
  validates :name, length: { minimum: 4 }
end
