class Tweet < ApplicationRecord

  ### Relationships ####
    belongs_to :user

  ### TWITTER API ###
  def self.sync(query, limit, type, name)
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "MaqpWY0TO2zBaZ8JHY4W79BKW"
      config.consumer_secret     = "D0R1TpuIMJDjkUoCFY1ShUzDCuagA7iPBDJJtnBG9fsO8cfkaY"
      config.access_token        = "316853982-tPm7s630qJqRoh5p4tLSRP4bX8c3irUlvp4FHvs3"
      config.access_token_secret = "6jRtkivqcQddKyIwvy5Tbh8qdkNIyO0x4NqPBNj9hUSUT"
    end # client

    ### AUTOMATIC SENTIMENT ANALYSIS ###
    results = []
    client.search(query, lang: 'en', :result_type => type, :name => name).take(limit).each do |tweet|
      results.push({
        body: tweet.text,
        # username: tweet.user.screen_name
        score: $analyser.score(tweet.text),
        sentiment: $analyser.sentiment(tweet.text),
        # type: tweet.result_type
      })
    end #search

    results
  end # self sync



end
