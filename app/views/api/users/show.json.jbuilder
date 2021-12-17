json.extract! @user, :id, :email, :username, :following, :followers
json.photoUrl url_for(@user.photo) if @user.photo.attached? 
json.following @user.following do |user|
        json.extract! user.followee, :id, :email, :username, :following, :followers
        json.photoUrl url_for(user.followee.photo) if user.followee.photo.attached? 
    end
json.followers @user.followers do |user|
        json.extract! user.follower, :id, :email, :username, :following, :followers
        json.photoUrl url_for(user.follower.photo) if user.follower.photo.attached? 
    end
