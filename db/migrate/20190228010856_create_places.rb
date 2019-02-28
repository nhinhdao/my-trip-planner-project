class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.text :name
      t.text :photo
      t.text :address
      t.string :time
      t.string :date

      t.timestamps
    end
  end
end
