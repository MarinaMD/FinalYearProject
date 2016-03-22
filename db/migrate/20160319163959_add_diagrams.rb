class AddDiagrams < ActiveRecord::Migration
  def change
    create_table :diagrams do |t|
      t.string :name
    end
  end
end
