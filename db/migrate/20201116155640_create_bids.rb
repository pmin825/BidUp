class CreateBids < ActiveRecord::Migration[5.2]
  def change
    create_table :bids do |t|
      t.integer :bid_amount, null: false 
      t.integer :product_id, null: false, foreign_key: true
      t.integer :bidder_id, null: false , foreign_key: true 
      t.timestamps
    end
    add_index :bids, :product_id 
    add_index :bids, :bidder_id 
  end
end
