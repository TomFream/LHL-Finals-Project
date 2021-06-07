class ChangeAnswersTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :answers, :answer_options
  end
end
