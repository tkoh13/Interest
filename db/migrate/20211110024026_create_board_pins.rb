class CreateBoardPins < ActiveRecord::Migration[5.2]
  def change
    create_table :board_pins do |t|
      t.references :board, foreign_key: true
      t.references :pin, foreign_key: true

      t.timestamps
    end
  end
end
