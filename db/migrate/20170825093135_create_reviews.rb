class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.numeric :rating
      t.text :detail
      t.references :article, foreign_key: true

      t.timestamps
    end
  end
end
