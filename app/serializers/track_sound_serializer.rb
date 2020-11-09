class TrackSoundSerializer < ActiveModel::Serializer
  attributes :position, :sound
  def sound
    {
      sound_name: self.object.sound.name,
      sound_location: self.object.sound.location,
      sound_bank: self.object.sound.bank.name
    }
  end
end
