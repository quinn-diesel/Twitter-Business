class AddSearchTermToTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :search_term, :string
  end
end
