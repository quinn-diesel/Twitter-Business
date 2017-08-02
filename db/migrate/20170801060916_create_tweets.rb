class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.text :body
      t.float :score
      t.integer :user_id
      t.string :sentiment
        t.timestamps
    end
  end
end
