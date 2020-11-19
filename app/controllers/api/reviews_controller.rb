class Api::ReviewsController < ApplicationController
    def index 
        @reviews = Review.all
        render :index
    end

    def create
        debugger 
        @review = Review.new(review_params)
        if @review.save
            render :show
        else 
            render json:["Must be signed in to submit a review"], status: 404
        end
    end 

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render :show 
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def review_params
        params.require(:review).permit(:rating, :feedback, :reviewer_id, :reviewee_id)
    end
end
