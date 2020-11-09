class TrackSound < ApplicationRecord
  belongs_to :sound
  belongs_to :track
end
