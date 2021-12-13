class Api::BoardsController < ApplicationController
  
    def create
        @board = Board.new(board_params)
        if @board.save
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
     end

    def show
        @board = Board.find_by(id: params[:id])
        if !@board.nil?
            render 'api/boards/show'
        else
            render json: ["invalid request"], status: 400
        end
    end

    def index
        user = User.find(params[:user_id])
        if (!user) render json: ["User does not exsist"], status: 404
        if (user == current_user) 
            @boards = Board.where("creator_id = ?", params[:user_id])
            render 'api/boards/index'
        else 
            @boards = Board.where("creator_id = ? AND private = ?", params[:user_id], false)
            render 'api/boards/index'
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
            render 'api/boards/show'
        else
            render json: @board.error.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && ( @board.creator_id == current_user.id )
            @board.destroy
            # maybe render json message of what board was destroyed? 
        else
            render json: ['invalid request'], status: 404
        end
    end

    private
    
    def board_params
        params.require(:board).permit(:id, :creator_id, :title, :description, :private)
    end
    
end
