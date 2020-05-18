class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :daily_goal
      t.string :weekly_goal
      t.string :monthly_goal
      t.string :yearly_goal
      t.references :user

      t.timestamps
    end
  end
end
