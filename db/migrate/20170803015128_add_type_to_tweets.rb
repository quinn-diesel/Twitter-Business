class AddTypeToTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :tweet_type, :string
  end
end
