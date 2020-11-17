class AddProductNameToBids < ActiveRecord::Migration[5.2]
  def change
    add_column :bids, :productName, :string 
  end
end
