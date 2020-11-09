class Sound < ApplicationRecord
  belongs_to :bank
  has_many :track_sounds
  has_many :tracks, through: :track_sounds
end
