class ArticlesController < ApplicationController
	include ArticlesHelper
	before_filter :require_login, except: [:index, :show]
	def index
  		@articles = Article.all
	end
	def show
		@article = Article.find(params[:id])
		@comment = Comment.new
		@comment.article_id = @article.id
		@review = Review.new
		@avg = Review.where(:article_id => @article.id).average(:rating)
		@imp = @article.body.summarize(:ratio => 25,:topics => true)
		@review.article_id = @article.id
	end
	def new
		@article = Article.new
	end
	def create
		sites	 = {
			'news18' => '#article_body',
			'indiatimes' => '.section1'
		}
		headings = {
			'news18' => '#page1>h1',
			'indiatimes' => '.header1'
		}
		if article_params['body'][0..3] == 'http'
			url = article_params['body']
			page = HTTParty.get(url)
			parsed_page = Nokogiri::HTML(page)
			sitename = (url.scan(/\.\w+\./))[0][1..-2]
			content = parsed_page.css(sites[sitename])
			content.search('style,div').each do |node| 
  				node.remove
			end
			content = Rails::Html::FullSanitizer.new.sanitize(content.text.gsub(/(?:\n\r?|\r\n?)/, '<br>'))
			imp = content.summarize(:topics => true)
			params[:article][:tag_list] = imp[1].force_encoding(Encoding::UTF_8)
			@article = Article.new(article_params)
			header = parsed_page.css(headings[sitename])
			@article.body = content
			@article.title = Rails::Html::FullSanitizer.new.sanitize(header.text.gsub(/(?:\n\r?|\r\n?)/, '<br>'))
		end
		@article.save
		redirect_to article_path(@article)
	end
	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		redirect_to articles_path
	end
	def edit
		@article = Article.find(params[:id])
	end
	def update
  		@article = Article.find(params[:id])
  		@article.update(article_params)

  		flash.notice = "Article '#{@article.title}' Updated!"
  		redirect_to article_path(@article)
	end
end