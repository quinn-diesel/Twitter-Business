class SearchesController < ApplicationController

  def create
   @listing = Listing.new(params[:listing])
   Twitter.update(@listing.tweet)
 end

  def update
  end

  def index
  end

  def show

    client = Twitter::REST::Client.new do |config|
    config.consumer_key        = "nUm32SXmvBqiJX2g8mDEkew4z"
    config.consumer_secret     = "3EZHbZ7qbg6rcObEL3QWNwUXaIhqfGJRKgbz9947yCqDOB8MTX"
    config.access_token        = "316853982-tPm7s630qJqRoh5p4tLSRP4bX8c3irUlvp4FHvs3"
    config.access_token_secret = "6jRtkivqcQddKyIwvy5Tbh8qdkNIyO0x4NqPBNj9hUSUT"
  end

    client.search("to:Trump", :result_type => "recent").take(100).collect do |tweet|
      puts "#{tweet.user.screen_name}: #{tweet.text}"
      @username = tweet.user.screen_name
      @tweet = tweet.text
    end

    
    puts 'made some stuff'


  end

  def edit
  end

  def new
  end

  def destroy
  end


end
