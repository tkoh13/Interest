json.set! @board_to_pin.id do
    json.extract! @board_to_pin, :id, :board_id, :pin_id
    json.set! @board_to_pin.id do 
        json.extract! @board_to_pin.pin, :id, :creator_id, :title, :description, :created_at
        json.photoUrl url_for(@board_to_pin.pin.photo)
    end
end