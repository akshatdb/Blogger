class ReviewsController < ApplicationController
	before_filter :require_login
	def create
  		@review = Review.new(review_params)
  		@review.article_id = params[:article_id]
		@review.save

  		redirect_to article_path(@review.article_id)
	end

	def review_params
  		params.require(:review).permit(:rating, :detail)
	end
end
