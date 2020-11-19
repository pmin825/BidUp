class Review < ApplicationRecord
    validates :feedback, :rating, :reviewee_id, :reviewer_id, presence: true

    belongs_to :reviewee,
        primary_key: :id,
        foreign_key: :reviewee_id,
        class_name: 'User'

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: 'User'
end
