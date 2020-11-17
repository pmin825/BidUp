class Api::BidsController < ApplicationController

    def index 
        @bids = Bid.all
        render :index
    end

    def create
        @bid = Bid.new(bid_params)
        if @bid.save
            render :show
        else 
            render json:["Must be signed in to submit a bid"], status: 404
        end
    end 

    def destroy
        @bid = Bid.find_by(id: params[:id])
        if @bid.destroy
            render :show 
        else
            render json: @bid.errors.full_messages, status: 404
        end
    end

    def bid_params
        params.require(:bid).permit(:bid_amount, :bidder_id, :product_id, :seller_id)
    end
end
