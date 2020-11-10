# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bank = Bank.create(name: '707')
kick = Sound.create(bank: bank, name: '707 Kick 1', location: './assets/sounds/TR-707Kick01.wav')
Sound.create(bank: bank, name: '707 Snare 1', location: './assets/sounds/TR-707Snare01.wav')
Sound.create(bank: bank, name: '707 Hat Closed', location: './assets/sounds/TR-707Hat_C.wav')
Sound.create(bank: bank, name: '707 Hat Open', location: './assets/sounds/TR-707Hat_O.wav')
Sound.create(bank: bank, name: '707 Crash', location: './assets/sounds/TR-707Crash.wav')
Sound.create(bank: bank, name: '707 Ride', location: './assets/sounds/TR-707Ride.wav')
Sound.create(bank: bank, name: '707 Tom Hi', location: './assets/sounds/TR-707Tom_Hi.wav')
Sound.create(bank: bank, name: '707 Tom Mid', location: './assets/sounds/TR-707Tom_Mid.wav')
Sound.create(bank: bank, name: '707 Tom Lo', location: './assets/sounds/TR-707Tom_Lo.wav')

bank = Bank.create(name: '808')
Sound.create(bank: bank, name: '808 Kick 1', location: './assets/sounds/808/01. Bass.wav')
Sound.create(bank: bank, name: '808 Snare 1', location: './assets/sounds/808/02. Snare.wav')
Sound.create(bank: bank, name: '808 Hat Closed', location: './assets/sounds/808/03. Closed Hat.wav')
Sound.create(bank: bank, name: '808 Hat Open', location: './assets/sounds/808/04. Open Hat.wav')
Sound.create(bank: bank, name: '808 Crash', location: './assets/sounds/808/05. Crash.wav')
Sound.create(bank: bank, name: '808 Ride', location: './assets/sounds/808/06. Ride.wav')
Sound.create(bank: bank, name: '808 Tom Hi', location: './assets/sounds/808/07. Tom 1.wav')
Sound.create(bank: bank, name: '808 Tom Mid', location: './assets/sounds/808/08. Tom 2.wav')
Sound.create(bank: bank, name: '808 Tom Lo', location: './assets/sounds/808/09. Tom 3.wav')

song = Song.create(title: 'Flatiron Blues', creator: 'Tom')
track = Track.create(song: song)

# TrackSound.create(track: track, sound: kick, position: 1)
# TrackSound.create(track: track, sound: kick, position: 3)
# TrackSound.create(track: track, sound: kick, position: 5)
# TrackSound.create(track: track, sound: kick, position: 7)
# TrackSound.create(track: track, sound: kick, position: 9)
# TrackSound.create(track: track, sound: kick, position: 11)
# TrackSound.create(track: track, sound: kick, position: 13)
# TrackSound.create(track: track, sound: kick, position: 15)