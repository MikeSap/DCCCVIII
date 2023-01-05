class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :creator, :bpm

  has_many :tracks
end
