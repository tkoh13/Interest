class Api::SessionsController < ApplicationController

    def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ["Invalid login credentials"], status: 422
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

end