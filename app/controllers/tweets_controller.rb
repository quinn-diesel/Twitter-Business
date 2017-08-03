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
    results = Tweet.sync( params[:query], params[:limit].to_i, params[:type] )
    render json: { data: results }

  end

  def save_searches
    @search = Tweet.find params[:id]

    body = params[:query]
    limit = param[:limit]
    results = Tweet.sync( query, limit.to_i )

    render json: { data: results }
    search = Tweet.create({
        body: tweet.text,
        username: twee.user.scree_name
    })

    # if params[:searches].present?
    #   results.each do |t|
    #    end
    #   end

  end  # save_searches

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
