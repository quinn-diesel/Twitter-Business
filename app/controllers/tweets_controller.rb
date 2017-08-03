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

    # send the original search through the JSON
    puts params
    results = Tweet.sync( params[:query], params[:limit].to_i, params[:type] )

    tweets_text = ''

    # save seach function for tweet information
    results.each do |r|
      Tweet.create({
        limit: params[:limit].to_i,
        tweet_type: params[:type],
        query: params[:query],
        body: r[:body],
        sentiment: r[:sentiment].to_s,
        score: r[:score],
      })
      tweets_text += ' ' + r[:body]
    end

    # tokeniser = WordsCounted::Tokeniser.new( tweets_text ).tokenise
    counter = WordsCounted.count( tweets_text )

    ignore_words = ['https']
    word_counts = []

    counter.token_frequency.each do |word|
      if word[0].length > 4 && !ignore_words.include?( word[0] )
        word_counts.push word
      end
    end
    # binding.pry

    render json: { data: results, counter: word_counts }

  end

  # def save_searches
  #   @search = Tweet.find params[:id]
  #
  #   body = params[:query]
  #   limit = param[:limit]
  #   results = Tweet.sync( query, limit.to_i )
  #
  #   render json: { data: results }
  #   search = Tweet.create({
  #       body: tweet.text,
  #       username: twee.user.scree_name
  #   })
  #
  #   # if params[:searches].present?
  #   #   results.each do |t|
  #   #    end
  #   #   end
  #
  # end  # save_searches

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
