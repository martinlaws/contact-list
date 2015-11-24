class Setup < ActiveRecord::Migration
  def change
    create_table :contacts do |c|
      c.string :first_name
      c.string :last_name
      c.string :email
    end
  end
end
