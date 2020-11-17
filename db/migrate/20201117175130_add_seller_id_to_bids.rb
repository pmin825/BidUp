class AddSellerIdToBids < ActiveRecord::Migration[5.2]
  def change
    add_column :bids, :seller_id, :integer
  end
end
