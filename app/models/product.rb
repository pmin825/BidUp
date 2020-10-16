class Product < ApplicationRecord

    validates :name, :price, :description, :location, presence: true  
    validates :seller_id, presence: true, uniqueness: true 

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: 'User'

    # has_many :bids, 
    #     foreign_key: :product_id,
    #     class_name: "Bid"

end

