class AddQueryToTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :query, :string
  end
end
