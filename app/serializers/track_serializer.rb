class TrackSerializer < ActiveModel::Serializer
  attributes :id, :song
  belongs_to :song
  has_many :track_sounds
end
