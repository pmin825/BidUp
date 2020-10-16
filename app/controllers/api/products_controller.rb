class Api::ProductsController < ApplicationController

    def index 
        @products = Product.all
        render :index 
    else 
        render json: @products.errors.full_messages, status: 
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

    private 

    def product_params
        params.require(:product).permit(:name, :price, :description, :location, :seller_id)
    end

end