class User < ApplicationRecord

  has_many :tweets

  has_secure_password
    validates :email, presence: true, uniqueness: true, length: {minimum: 5}


end
