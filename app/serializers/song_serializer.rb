class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :creator

  has_many :tracks
end
