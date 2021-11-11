class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps
    end
    add_index :boards, :creator_id
    add_index :boards, :title
  end
end
