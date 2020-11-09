class Track < ApplicationRecord
    has_many :track_sounds
    has_many :sounds, through: :track_sounds
    belongs_to :song
end
