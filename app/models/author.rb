class Author < ApplicationRecord
  authenticates_with_sorcery!
  validates_confirmation_of :password, message: "should match Password", if: :password
  validates_uniqueness_of :email, message: "is already registered!"
end
