class CreateBoardToPins < ActiveRecord::Migration[5.2]
  def change
    create_table :board_to_pins do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
    end

    add_index :board_to_pins, :board_id
    add_index :board_to_pins, :pin_id
  end
end
