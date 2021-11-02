class Api::SessionsController < ApplicationController

    def create
    @user = User.find_by_credentials(user_params)
        if @user.nil?
            render json: ["Invalid login credentials"], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end
    
    def destroy
        @user = current_user

        if @user
            logout!
            render json: {}
        else
            render json: ["Must be logged in"], status: 404
        end
    end

  private
  def user_params
        params.require(:user).permit(:email, :password)
  end

end