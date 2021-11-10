json.extract! @user, :id, :email, :username
json.photoUrl url_for(@user.photo)