json.extract! @board, :id, :creator_id, :title, :description, :private
    json.pins @board.pins do |pin|
        json.extract! pin, :id, :creator_id, :title, :description
        json.photoUrl url_for(pin.photo)
    end
# json.photoUrl url_for(@board.photo)