class Track < ApplicationRecord
    has_many :track_sounds, dependent: :destroy
    has_many :sounds, through: :track_sounds
    belongs_to :song
end
