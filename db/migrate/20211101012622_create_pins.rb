class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.text :alt_text
      t.integer :board_id
      t.string :source_url 
      t.integer :profile_id

      t.timestamps
    end
    add_index :pins, :creator_id
    add_index :pins, :board_id
  end
end
