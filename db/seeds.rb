# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

goku = User.create(name: "goku", email: "goku@dragonballz.com" )
andy = User.create(name: "andy", email: "andy@quizapp.com" )
nally = User.create(name: "nally", email: "nally@quizapp.com" )

Category.create(name: "JavaScript")
Category.create(name: "HTML")

Question.create(question: "Inside which HTML element do we put the JavaScript?")