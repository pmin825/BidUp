class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.integer :reviewer_id, null: false, foreign_key: true
      t.integer :reviewee_id, null: false , foreign_key: true 
      t.timestamps
    end
    add_index :reviews, :reviewer_id
    add_index :reviews, :reviewee_id
  end
end
