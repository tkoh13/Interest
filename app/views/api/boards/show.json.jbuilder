json.extract! @board, :id, :creator_id, :title, :description
json.photoUrl url_for(@board.photo)