class TrackSerializer < ActiveModel::Serializer
  attributes :id

  has_many :track_sounds
end
