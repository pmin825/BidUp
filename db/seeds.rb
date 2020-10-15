# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;

demo_user = User.create!(email: 'demo@aa.io', username: 'demo_user', password: 'password')
jon = User.create!(email: 'jon@aa.io', username: 'jon', password: 'password')
jd = User.create!(email: 'jd@aa.io', username: 'jd', password: 'password')
chris = User.create!(email: 'chris@aa.io', username: 'chris', password: 'password')
jacky = User.create!(email: 'jacky@aa.io', username: 'jacky', password: 'password')
tri = User.create!(email: 'tri@aa.io', username: 'tri', password: 'password')
taylor = User.create!(email: 'taylor@aa.io', username: 'taylor', password: 'password')
