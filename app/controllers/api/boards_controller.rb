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
        user = User.find(params[:id])
        @boards = user.boards
        render 'api/boards/index'
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
        params.require(:board).permit(:id, :creator_id, :title, :description)
    end
    
end
