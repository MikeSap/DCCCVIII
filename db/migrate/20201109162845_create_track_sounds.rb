class CreateTrackSounds < ActiveRecord::Migration[6.0]
  def change
    create_table :track_sounds do |t|
      t.references :track, null: false, foreign_key: true
      t.references :sound, null: false, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
