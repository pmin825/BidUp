# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('users')


user1 = User.create!(email: 'demo@aa.io', username: 'demo_user', password: 'password')
user2 = User.create!(email: 'jon@aa.io', username: 'jon', password: 'password')
user3 = User.create!(email: 'jd@aa.io', username: 'jd', password: 'password')
user4 = User.create!(email: 'chris@aa.io', username: 'chris', password: 'password')
user5 = User.create!(email: 'jacky@aa.io', username: 'jacky', password: 'password')
user6 = User.create!(email: 'tri@aa.io', username: 'tri', password: 'password')
user7 = User.create!(email: 'taylor@aa.io', username: 'taylor', password: 'password')


product1 = Product.create!(name: 'Airpods', price: 120, description: 'Airpods, 1st gen.', location: 'San Francisco', seller_id: user1.id)
product2 = Product.create!(name: 'Nike hat', price: 15, description: 'Nike golf hat.', location: 'San Francisco', seller_id: user2.id)
product3 = Product.create!(name: 'Laptop bag', price: 40, description: 'Black laptop bag, perfect for 13"-15" laptops.', location: 'Los Angeles', seller_id: user3.id)
product4 = Product.create!(name: 'Blue-light glasses', price: 20, description: 'Blue light glasses, great for the office or while gaming.', location: 'Los Angeles', seller_id: user4.id)
product5 = Product.create!(name: 'Wireless mouse', price: 10, description: 'Wireless mouse, comes with usb dongle', location: 'San Francisco', seller_id: user5.id)
product6 = Product.create!(name: 'Portable bluetooth speaker', price: 25, description: 'Lightweight and portable, bluetooth enabled.', location: 'Los Angeles', seller_id: user6.id)
product7 = Product.create!(name: 'Massage chair', price: 140, description: 'Upper body massage chair. Use laying down or sitting up.', location: 'San Francisco', seller_id: user7.id)



