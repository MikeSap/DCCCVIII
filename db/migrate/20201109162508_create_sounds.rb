class CreateSounds < ActiveRecord::Migration[6.0]
  def change
    create_table :sounds do |t|
      t.string :name
      t.string :location
      t.references :bank, null: false, foreign_key: true

      t.timestamps
    end
  end
end
