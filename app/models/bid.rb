class Bid < ApplicationRecord

    validates :product_id, :bidder_id, presence: true   

    belongs_to :product,
        foreign_key: :product_id,
        class_name: 'Product'

    belongs_to :bidder,
        foreign_key: :bidder_id, 
        class_name: 'User'
end
