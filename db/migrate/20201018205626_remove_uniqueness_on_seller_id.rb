class RemoveUniquenessOnSellerId < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, :seller_id
  end
end
