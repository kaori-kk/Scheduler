class CreateToDos < ActiveRecord::Migration[5.2]
  def change
    create_table :to_dos do |t|
      t.string :daily_to_do
      t.string :weekly_to_do
      t.string :monthly_to_do
      t.string :yearly_to_do
      t.references :user

      t.timestamps
    end
  end
end
