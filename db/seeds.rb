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
ActiveRecord::Base.connection.reset_pk_sequence!('products')


user1 = User.create!(email: 'demo@aa.io', username: 'demo_user', password: 'password')
user2 = User.create!(email: 'jon@aa.io', username: 'jon', password: 'password')
user3 = User.create!(email: 'jd@aa.io', username: 'jd', password: 'password')
user4 = User.create!(email: 'chris@aa.io', username: 'chris', password: 'password')
user5 = User.create!(email: 'jacky@aa.io', username: 'jacky', password: 'password')
user6 = User.create!(email: 'tri@aa.io', username: 'tri', password: 'password')
user7 = User.create!(email: 'taylor@aa.io', username: 'taylor', password: 'password')



product1 = Product.create!(name: 'Skateboard', price: 30, description: 'Lightly used, in good condition skateboard.', location: 'San Francisco', seller_id: user1.id)
product2 = Product.create!(name: 'Black hat', price: 15, description: 'Just a black hat.', location: 'San Francisco', seller_id: user2.id)
product3 = Product.create!(name: 'Laptop bag', price: 40, description: 'Brown luxury leather laptop bag.', location: 'Los Angeles', seller_id: user3.id)
product4 = Product.create!(name: 'Sunglasses', price: 20, description: 'Ray Ban sunglasses.', location: 'Los Angeles', seller_id: user4.id)
product5 = Product.create!(name: 'Desktop monitor', price: 10, description: 'HP 29" desktop monitor.', location: 'San Francisco', seller_id: user5.id)
product6 = Product.create!(name: 'Bluetooth speaker', price: 25, description: 'Lightweight and portable, bluetooth enabled.', location: 'Los Angeles', seller_id: user6.id)
product7 = Product.create!(name: 'Wallet', price: 140, description: 'Luxury LV wallet, bi-fold style.', location: 'San Francisco', seller_id: user7.id)
product8 = Product.create!(name: 'Airpods', price: 60, description: 'First gen airpods.', location: 'San Francisco', seller_id: user1.id)
product9 = Product.create!(name: 'Cat tree', price: 50, description: 'Six-level cat tree.', location: 'San Francisco', seller_id: user2.id)
product10 = Product.create!(name: 'Mechanical Keyboard', price: 100, description: 'K2 mechnical keyboard. RGB, wireless, gateron blue switches.', location: 'Los Angeles', seller_id: user3.id)
product11 = Product.create!(name: 'Paralettes', price: 50, description: 'Black Lebert paralettes. Foam grips, sold as pair.', location: 'Los Angeles', seller_id: user4.id)
product12 = Product.create!(name: 'Sennheiser headphones', price: 100, description: 'Sennheiser HD 380 Pro. Great for mixing or just enjoying music.', location: 'San Francisco', seller_id: user5.id)
product13 = Product.create!(name: 'Wireless Speaker', price: 15, description: "Black and red Victsing wireless/bluetooth speaker. Charges via micro usb.", location: 'Los Angeles', seller_id: user6.id)


file1 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/skateboard.jpg')
product1.photoFile.attach(io: file1, filename: "img_#{product1.id}.jpg")

file2 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/black+hat.jpg')
product2.photoFile.attach(io: file2, filename: "img_#{product2.id}.jpg")

file3 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/laptop+bag.jpg')
product3.photoFile.attach(io: file3, filename: "img_#{product3.id}.jpg")

file4 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/rayban+sunglasses.jpg')
product4.photoFile.attach(io: file4, filename: "img_#{product4.id}.jpg")

file5 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/desktop+monitor.jpg')
product5.photoFile.attach(io: file5, filename: "img_#{product5.id}.jpg")

file6 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/anker_speaker8.jpg')
product6.photoFile.attach(io: file6, filename: "img_#{product6.id}.jpg")

file7 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/LV+wallet.jpg')
product7.photoFile.attach(io: file7, filename: "img_#{product7.id}.jpg")

file8 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/airpods.jpg')
product8.photoFile.attach(io: file8, filename: "img_#{product8.id}.jpg")

file9 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/cat_tree.jpg')
product9.photoFile.attach(io: file9, filename: "img_#{product9.id}.jpg")

file10 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/k2_keyboard.jpg')
product10.photoFile.attach(io: file10, filename: "img_#{product10.id}.jpg")

file11 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/paralettes.jpg')
product11.photoFile.attach(io: file11, filename: "img_#{product11.id}.jpg")

file12 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/sennheiser_headphones.jpg')
product12.photoFile.attach(io: file12, filename: "img_#{product12.id}.jpg")

file13 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/victsing_speaker.jpg')
product13.photoFile.attach(io: file13, filename: "img_#{product13.id}.jpg")