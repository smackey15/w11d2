class Todo < ApplicationRecord
    validates :body, presence: true
    validates :title, presence: true, uniqueness: true
    validates :done, inclusion: { in: [true, false] }
end
