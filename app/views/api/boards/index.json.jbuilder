@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :creator_id, :title, :description, :private, :created_at
            json.pins board.pins do |pin|
                json.extract! pin, :id, :creator_id, :title, :description, :created_at
                json.photoUrl url_for(pin.photo)
            end
    end
end