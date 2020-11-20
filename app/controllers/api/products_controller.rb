class Api::ProductsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @products = Product.all
        render :index 
    else
        # render json: ["Can't find your product"]
    end

    def show
        @product = Product.find_by(id: params[:id])
    end

    def create 
        @product = Product.new(product_params)
        if @product.save 
            render :show
        else
            render json: @product.errors.full_messages, status: 422 
        end
    end

    def update
        @product = Product.find_by(id: params[:id])

        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_message, status: 422
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])
        if @product.destroy 
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def search
        query=params[:query]
        
        @products = Product.where('name ILIKE ?', "%#{query}%")
        if @products
            render :index
        else
            render json: ["No results found for #{query}"], status: 422 
        end
    end

    private 

    def product_params
        params.require(:product).permit(:name, :price, :description, :location, :seller_id, :photoFile, :id)
    end

end
