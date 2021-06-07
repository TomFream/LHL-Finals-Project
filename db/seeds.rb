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
Category.create(name: "SQL")

Question.create(question: "Inside which HTML element do we put the JavaScript?", category_id: 1)

Question.create(question: "What is the correct HTML for making a hyperlink?", category_id: 2)

AnswerOption.create(question_id: 1, answer_option: 'testing string', is_correct: false)

# htmlFile = File.open("./htmlData.json")
# htmlData = file.read
# html_seed_data = JSON.parse() 

# q1 = JSON.parse('{"id":140,"question":"What is the correct HTML for making a text area?","description":null,"answers":{"answer_a":"<input type=\"textbox\">","answer_b":"<textarea>","answer_c":"<input type=\"textarea\">","answer_d":"<textbox>","answer_e":null,"answer_f":null}')

# html_seed_data.each do |d|
#   cat = d["tags"][0]["name"]
#   c1 = Category.select(:id).where(name: cat)
#   Question.create(question: d["question"], category_id: c1.ids[0])
# end
# cat = q1["tags"][0]["name"]
# c1 = Category.select(:id).where(name: cat)
# Question.create(question: q1["question"], category_id: c1.ids[0])
  

  # c1 = Category.select(:id).where(name: "JavaScript")
  # Question.create(question: "What JS values are truthy" , category_id: c1.ids[0])

#   {
#   "id": 519,
#   "question": "What is the correct HTML for making a hyperlink?",
#   "description": null,
#   "answers": {
#     "answer_a": "<a href=\"http://mcqsets.com\">MCQ Sets Quiz</a>",
#     "answer_b": "<http://mcqsets.com</a>",
#     "answer_c": "<a name=\"http://mcqsets.com\">MCQ Sets Quiz</a>",
#     "answer_d": "url=\"http://mcqsets.com\">MCQ Sets Quiz",
#     "answer_e": null,
#     "answer_f": null
#   },
#   "multiple_correct_answers": "false",
#   "correct_answers": {
#     "answer_a_correct": "true",
#     "answer_b_correct": "false",
#     "answer_c_correct": "false",
#     "answer_d_correct": "false",
#     "answer_e_correct": "false",
#     "answer_f_correct": "false"
#   },
#   "correct_answer": "answer_a",
#   "explanation": null,
#   "tip": null,
#   "tags": [{ "name": "HTML" }],
#   "category": "Code",
#   "difficulty": "Medium"
# }