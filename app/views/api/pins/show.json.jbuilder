json.extract! @pin, :id, :creator_id, :title, :description, :created_at
json.photoUrl url_for(@pin.photo)