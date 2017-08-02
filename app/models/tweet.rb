class Tweet < ApplicationRecord

  ### Relationships ####
    belongs_to :user

  ### TWITTER API ###
  def self.sync(query, limit)
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "MaqpWY0TO2zBaZ8JHY4W79BKW"
      config.consumer_secret     = "D0R1TpuIMJDjkUoCFY1ShUzDCuagA7iPBDJJtnBG9fsO8cfkaY"
      config.access_token        = "316853982-tPm7s630qJqRoh5p4tLSRP4bX8c3irUlvp4FHvs3"
      config.access_token_secret = "6jRtkivqcQddKyIwvy5Tbh8qdkNIyO0x4NqPBNj9hUSUT"
    end # client


    ### AUTOMATIC SENTIMENT ANALYSIS ###
    results = []
    client.search(query, lang: 'en').take(limit).each do |tweet|
      # newTweets = create(body: tweet.text, score: $analyser.score(tweet.text), sentiment: $analyser.sentiment(tweet.text))
      results.push({
        body: tweet.text,
        score: $analyser.score(tweet.text),
        sentiment: $analyser.sentiment(tweet.text)
      })
      results
    end #search

    results
  end # self sync



end
