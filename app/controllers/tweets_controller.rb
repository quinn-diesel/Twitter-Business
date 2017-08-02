class TweetsController < ApplicationController

  def create
    @tweet = Tweet.new(search_params)
  end

  def update
  end

  def index
  end

  def show
  end

  # AJAX endpoint for "/tweets/search"
  def search
    puts params
    results = Tweet.sync( params[:query], params[:limit].to_i )
    render json: { data: results }
  end

  def edit
  end

  def new
    @tweet = Tweet.new
  end

  def destroy
  end


  def private
    params.require(:search).permit(:body, :sentiment_score)
  end


end
