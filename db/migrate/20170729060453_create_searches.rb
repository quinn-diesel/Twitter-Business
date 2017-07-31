class CreateSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :searches do |t|
      t.string :companyname
      t.string :employeename
      t.string :country

      t.timestamps
    end
  end
end
