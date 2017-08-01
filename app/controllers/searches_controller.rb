class SearchesController < ApplicationController

  def create
  end

  def update
  end

  def index
  end



  def show
    
    @search = Search.new()

    def twitter_config

      client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "nUm32SXmvBqiJX2g8mDEkew4z"
      config.consumer_secret     = "3EZHbZ7qbg6rcObEL3QWNwUXaIhqfGJRKgbz9947yCqDOB8MTX"
      config.access_token        = "316853982-tPm7s630qJqRoh5p4tLSRP4bX8c3irUlvp4FHvs3"
      config.access_token_secret = "6jRtkivqcQddKyIwvy5Tbh8qdkNIyO0x4NqPBNj9hUSUT"
    end # client

       search = client.search("to:(params[:q])", :result_type => "recent").take(10).collect do |tweet|
        puts "#{tweet.user.screen_name}: #{tweet.text}"
        @username = tweet.user.screen_name
        @tweet = tweet.text
      end # client.search

      raise hell
    #
    # def search_method
    #
    #   @search = Search.new({
    #     params[:q],
    #     params[]
    #     })
    #
    # end # search_method

    def results
      render :json => @tweet
    end

    end

  end # end show

  def edit
  end

  def new
  end

  def destroy
  end


end
