# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bank = Bank.create(name: '808')
kick = Sound.create(bank: bank, name: '808 Kick', location: '808kick.mp3')

song = Song.create(title: 'Flatiron Blues', creator: 'Tom')
track = Track.create(song: song)

TrackSound.create(track: track, sound: kick, position: 1)
TrackSound.create(track: track, sound: kick, position: 3)
TrackSound.create(track: track, sound: kick, position: 5)
TrackSound.create(track: track, sound: kick, position: 7)
TrackSound.create(track: track, sound: kick, position: 9)
TrackSound.create(track: track, sound: kick, position: 11)
TrackSound.create(track: track, sound: kick, position: 13)
TrackSound.create(track: track, sound: kick, position: 15)