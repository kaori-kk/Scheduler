class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.datetime :period
      t.references :user

      t.timestamps
    end
  end
end
