class AddIndexToSellerId < ActiveRecord::Migration[5.2]
  def change
    add_index :products, :seller_id
  end
end
