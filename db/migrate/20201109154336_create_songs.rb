class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :creator
      t.integer :bpm

      t.timestamps
    end
  end
end
