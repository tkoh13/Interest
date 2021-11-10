@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :creator_id, :title, :description
        json.photoUrl url_for(board.photo)
    end
end