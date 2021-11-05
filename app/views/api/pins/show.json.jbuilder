json.extract! @pin, :id, :creator_id, :title, :description
json.photoUrl url_for(@pin.photo)