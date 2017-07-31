class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # before_filter :load_tweets


  # limiting the number of tweets to 5
  # def load_tweets
  #   @tweets = Twitter.user_timeline
  # end





end
