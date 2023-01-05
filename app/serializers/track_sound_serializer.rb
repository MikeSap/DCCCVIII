class TrackSoundSerializer < ActiveModel::Serializer
  attributes :position, :sound, :track
  def sound
    {
      sound_id: self.object.sound.id,
      sound_name: self.object.sound.name,
      sound_location: self.object.sound.location,
      sound_bank: self.object.sound.bank.name
    }
  end
  belongs_to :track
end
