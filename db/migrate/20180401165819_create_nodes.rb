class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.text :parent
      t.text :prob

      t.timestamps null: false
    end
  end
end
