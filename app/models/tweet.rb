class Tweet < ApplicationRecord

  def self.sync(query, limit)
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "1BBIstDS2uzQkdcAC4gYosdKk"
      config.consumer_secret     = "H2Js9WXs4YAQQ5pHzp4PzvkTDdlcg5vYUEAAOJKr9QtjoeTtuj"
      config.access_token        = "316853982-Rh8nMeqRWhiEGzZi843lelnIweO4o5z8eAuI14W7"
      config.access_token_secret = "QxDcvQ8mHXb1CHb74vLiI5MQzB9lraazYu8s0ZoPj6MYK"
    end # client

      #  search = client.search("to:(params[:q])", :result_type => "recent").take(10).collect do |tweet|
      #   puts "#{tweet.user.screen_name}: #{tweet.text}"
      #   @username = tweet.user.screen_name
      #   @tweet = tweet.text
      # end # client.search

    results = []
    client.search(query, lang: 'en').take(limit).each do |tweet|
      # newTweets = create(body: tweet.text, score: $analyser.score(tweet.text), sentiment: $analyser.sentiment(tweet.text))
      results.push({
        body: tweet.text,
        score: $analyser.score(tweet.text),
        sentiment: $analyser.sentiment(tweet.text)
      })
    end

    results
  end

  # before_save :set_sentiment, if: :body_changed?
  #
  # def set_sentiment
  #   self.sentiment = $analyser.sentiment(body)
  #   self.score = $analyser.score(body)
  # end


end
