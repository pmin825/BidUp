class AddFeedbackToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :feedback, :text, null: false
  end
end
