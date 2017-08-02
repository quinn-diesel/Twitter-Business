class AddDateToTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :date, :date
  end
end
