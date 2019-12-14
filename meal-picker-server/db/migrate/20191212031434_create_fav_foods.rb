class CreateFavFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :fav_foods do |t|
      t.string :res_name
      t.integer :user_id
      t.integer :res_id

      t.timestamps
    end
  end
end
