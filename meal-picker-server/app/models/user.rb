class User < ApplicationRecord
    has_many :fav_food
    has_secure_password
    validates :email, presence: true, uniqueness: true
end
