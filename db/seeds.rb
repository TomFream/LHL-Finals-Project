# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

goku = User.create(name: "goku", email: "goku@dragonballz.com" )
andy = User.create(name: "andy", email: "andy@quizapp.com" )
nally = User.create(name: "nally", email: "nally@quizapp.com" )

Category.create(name: "JavaScript")
Category.create(name: "HTML")
Category.create(name: "MySQL")

# HTML category seed data
htmlFile = File.open(File.join(Rails.root, 'db', 'htmlData.json'))
# htmlFile = File.open("/Users/tom/Documents/lighthouse/final/LHL-Finals-Project/db/htmlData.json")
htmlData = htmlFile.read
html_seed_data = JSON.parse(htmlData) 

html_seed_data.each do |d|
  cat = d["tags"][0]["name"]
  c1 = Category.select(:id).where(name: cat)
  newQuestion = Question.create(question: d["question"], category_id: c1.ids[0])

  d["answers"].each do |x|
    unless x[1] == nil
      correct = x[0].to_s == d["correct_answer"].to_s ? true : false
      AnswerOption.create(question_id: newQuestion.id, answer_option: x[1], is_correct: correct)
    end
  end
end

# JavaScript category seed data
jsFile = File.open(File.join(Rails.root, 'db', 'jsData.json'))
# jsFile = File.open("/Users/tom/Documents/lighthouse/final/LHL-Finals-Project/db/jsData.json")
jsData = jsFile.read
js_seed_data = JSON.parse(jsData) 

js_seed_data.each do |d|
  cat = d["tags"][0]["name"]
  c1 = Category.select(:id).where(name: cat)
  newQuestion = Question.create(question: d["question"], category_id: c1.ids[0])

  d["answers"].each do |x|
    unless x[1] == nil
      correct = x[0].to_s == d["correct_answer"].to_s ? true : false
      AnswerOption.create(question_id: newQuestion.id, answer_option: x[1], is_correct: correct)
    end
  end
end

# SQL category seed data
sqlFile = File.open(File.join(Rails.root, 'db', 'sqlData.json'))
# sqlFile = File.open("/Users/tom/Documents/lighthouse/final/LHL-Finals-Project/db/sqlData.json")
sqlData = sqlFile.read
sql_seed_data = JSON.parse(sqlData) 

sql_seed_data.each do |d|
  cat = d["tags"][0]["name"]
  c1 = Category.select(:id).where(name: cat)
  newQuestion = Question.create(question: d["question"], category_id: c1.ids[0])

  d["answers"].each do |x|
    unless x[1] == nil
      correct = x[0].to_s == d["correct_answer"].to_s ? true : false
      AnswerOption.create(question_id: newQuestion.id, answer_option: x[1], is_correct: correct)
    end
  end
end