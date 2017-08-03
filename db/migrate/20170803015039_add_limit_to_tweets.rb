class AddLimitToTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :limit, :integer
  end
end
