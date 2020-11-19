# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Bid.destroy_all
Review.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('bids')
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')


user1 = User.create!(email: 'demo@aa.io', username: 'demo_user', password: 'password')
user2 = User.create!(email: 'jon@aa.io', username: 'jon', password: 'password')
user3 = User.create!(email: 'jd@aa.io', username: 'jd', password: 'password')
user4 = User.create!(email: 'chris@aa.io', username: 'chris', password: 'password')
user5 = User.create!(email: 'jacky@aa.io', username: 'jacky', password: 'password')
user6 = User.create!(email: 'tri@aa.io', username: 'tri', password: 'password')
user7 = User.create!(email: 'taylor@aa.io', username: 'taylor', password: 'password')
user8 = User.create!(email: 'jen@aa.io', username: 'jen', password: 'password')
user9 = User.create!(email: 'julia@aa.io', username: 'julia', password: 'password')
user10 = User.create!(email: 'ryan@aa.io', username: 'ryan', password: 'password')
user11 = User.create!(email: 'zack@aa.io', username: 'zack', password: 'password')
user12 = User.create!(email: 'lina@aa.io', username: 'lina', password: 'password')
user13 = User.create!(email: 'erik@aa.io', username: 'erik', password: 'password')
user14 = User.create!(email: 'carlos@aa.io', username: 'carlos', password: 'password')



product1 = Product.create!(name: 'Skateboard', price: 30, description: 'Lightly used, in good condition skateboard.', location: 'San Francisco, CA', seller_id: user1.id)
product2 = Product.create!(name: 'Black hat', price: 15, description: 'Just a black hat.', location: 'San Francisco, CA', seller_id: user2.id)
product3 = Product.create!(name: 'Laptop bag', price: 40, description: 'Brown luxury leather laptop bag.', location: 'Los Angeles, CA', seller_id: user3.id)
product4 = Product.create!(name: 'Sunglasses', price: 20, description: 'Ray Ban sunglasses.', location: 'Los Angeles, CA', seller_id: user4.id)
product5 = Product.create!(name: 'Desktop monitor', price: 10, description: 'HP 29" desktop monitor.', location: 'San Francisco, CA', seller_id: user5.id)
product6 = Product.create!(name: 'Bluetooth speaker', price: 25, description: 'Lightweight and portable, bluetooth enabled.', location: 'Los Angeles, CA', seller_id: user6.id)
product7 = Product.create!(name: 'Wallet', price: 140, description: 'Luxury LV wallet, bi-fold style.', location: 'San Francisco, CA', seller_id: user7.id)
product8 = Product.create!(name: 'Airpods', price: 60, description: 'First gen airpods.', location: 'San Francisco, CA', seller_id: user1.id)
product9 = Product.create!(name: 'Cat tree', price: 50, description: 'Six-level cat tree.', location: 'San Francisco, CA', seller_id: user2.id)
product10 = Product.create!(name: 'Mechanical Keyboard', price: 100, description: 'K2 mechnical keyboard. RGB, wireless, gateron blue switches.', location: 'Los Angeles, CA', seller_id: user3.id)
product11 = Product.create!(name: 'Paralettes', price: 50, description: 'Black Lebert paralettes. Foam grips, sold as pair.', location: 'Los Angeles, CA', seller_id: user4.id)
product12 = Product.create!(name: 'Sennheiser headphones', price: 100, description: 'Sennheiser HD 380 Pro. Great for mixing or just enjoying music.', location: 'San Francisco, CA', seller_id: user5.id)
product13 = Product.create!(name: 'Wireless Speaker', price: 15, description: "Black and red Victsing wireless/bluetooth speaker. Charges via micro usb.", location: 'Los Angeles, CA', seller_id: user6.id)
product14 = Product.create!(name: 'Electric upper body massage chair', price: 100, description: "Super relaxing upper body massage chair. Can use laying down or sitting up", location: 'New York, NY', seller_id: user8.id)
product15 = Product.create!(name: 'Under Armour baseball gloves', price: 10, description: "Black Under Armour baseball gloves for sale. These are still in good condition ", location: 'New York, NY', seller_id: user9.id)
product16 = Product.create!(name: 'Incase laptop bag', price: 30, description: "laptop bag for sale, comes with detachable carrying strap. Fits most laptops.", location: 'New York, NY', seller_id: user10.id)
product17 = Product.create!(name: 'Bluelight Glasses', price: 10, description: "These are great for use in the office, or if you are a gamer.", location: 'New York, NY', seller_id: user10.id)
product18 = Product.create!(name: 'Candle', price: 50, description: "This candle has the best smell ever.", location: 'Miami, FL', seller_id: user11.id)
product19 = Product.create!(name: 'Facemasks', price: 10, description: "Disposable protective facemasks.", location: 'Miami, FL', seller_id: user12.id)
product20 = Product.create!(name: 'Louis Vuitton wallet', price: 200, description: "simple, clean, LV wallet.", location: 'Miami, FL', seller_id: user13.id)
product21 = Product.create!(name: 'Resistance bands', price: 15, description: "Different resistance levels for each band, great for using to stretch.", location: 'Miami, FL', seller_id: user14.id)
product22 = Product.create!(name: 'Scissors', price: 5, description: "Just your basic scissors. Let me know if interested.", location: 'New York, NY', seller_id: user8.id)
product23 = Product.create!(name: 'Suitcase', price: 70, description: "Salmon pink light-weight suitcase. Small enough to pass as carry on bag when traveling.", location: 'New York, NY', seller_id: user9.id)
product24 = Product.create!(name: 'Toolkit with carrying case', price: 40, description: "Toolkit that has your basic everyday common tools.", location: 'New York, NY', seller_id: user10.id)
product25 = Product.create!(name: 'Water spray bottle', price: 5, description: "Small waterspray bottle.", location: 'Miami, FL', seller_id: user11.id)
product26 = Product.create!(name: 'Wearable body weights', price: 20, description: "Weights that you can wear. Ankles, arms, etc...", location: 'Miami, FL', seller_id: user12.id)
product27 = Product.create!(name: 'Yoga mats', price: 25, description: "Pair of yoga mats for sale. I have a few extra so getting rid of these now.", location: 'Miami, FL', seller_id: user13.id)
product28 = Product.create!(name: 'Air fryer', price: 40, description: "Air fryer for all your air frying needs. Send a bid.", location: 'San Francisco, CA', seller_id: user2.id)
product29 = Product.create!(name: 'Body tape measure', price: 5, description: "Body tape measure.", location: 'San Francisco, CA', seller_id: user2.id)
product30 = Product.create!(name: 'Hair clippers', price: 30, description: "3 seperate attachements giving you all you need in 1 clipper.", location: 'Los Angeles, CA', seller_id: user3.id)
product31 = Product.create!(name: 'Honeywell fan', price: 10, description: "Small desk fan. Runs well.", location: 'Los Angeles, CA', seller_id: user3.id)
product32 = Product.create!(name: 'Northface backpack', price: 30, description: "Teal blue and yellow northface backpack.", location: 'New York, NY', seller_id: user10.id)
product33 = Product.create!(name: 'Pen', price: 100, description: "One of a kind pen. Has the name Peter on it.", location: 'San Francisco, CA', seller_id: user1.id)
product34 = Product.create!(name: 'Pencil Sharpener', price: 10, description: "Sharpen all your pencils with this powerful pencil sharpener.", location: 'Miami, FL', seller_id: user14.id)
product35 = Product.create!(name: 'Piggy Bank', price: 12, description: "Blue plastic piggy bank. Hold all that money you got it in a safe place!", location: 'Miami, FL', seller_id: user13.id)
product36 = Product.create!(name: 'Standing fan', price: 40, description: "A nice standing fan with ionizer. Keep cool.", location: 'San Francisco, CA', seller_id: user4.id)
product37 = Product.create!(name: 'Vertical mouse', price: 14, description: "Do your wrist a favor, use a vertical mouse. This one is wireless and your wrist will thank you.", location: 'New York, NY', seller_id: user9.id)
product38 = Product.create!(name: 'Yellow Cup', price: 6, description: "A yellow cup with a smile on it. Start your day in a positive mood.", location: 'New York, NY', seller_id: user9.id)
product39 = Product.create!(name: 'Wine rack', price: 40, description: "A nice wine rack for to hold all the nice wines you have.", location: 'San Francisco, CA', seller_id: user2.id)
product40 = Product.create!(name: 'Black wireless headphones', price: 15, description: "Simple black wireless headphones. Works with bluetooth. Charges with case.", location: 'Miami, FL', seller_id: user12.id)




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

file14 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/massage_chair.jpg')
product14.photoFile.attach(io: file14, filename: "img_#{product14.id}.jpg")

file15 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/baseball_gloves.jpg')
product15.photoFile.attach(io: file15, filename: "img_#{product15.id}.jpg")

file16 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/black_laptop_bag.jpg')
product16.photoFile.attach(io: file16, filename: "img_#{product16.id}.jpg")

file17 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/bluelight_glasses.jpg')
product17.photoFile.attach(io: file17, filename: "img_#{product17.id}.jpg")

file18 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/candle.jpg')
product18.photoFile.attach(io: file18, filename: "img_#{product18.id}.jpg")

file19 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/facemasks.jpg')
product19.photoFile.attach(io: file19, filename: "img_#{product19.id}.jpg")

file20 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/lv_walllet2.jpg')
product20.photoFile.attach(io: file20, filename: "img_#{product20.id}.jpg")

file21 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/resistance_bands.jpg')
product21.photoFile.attach(io: file21, filename: "img_#{product21.id}.jpg")

file22 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/scissors.jpg')
product22.photoFile.attach(io: file22, filename: "img_#{product22.id}.jpg")

file23 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/suitcase.jpg')
product23.photoFile.attach(io: file23, filename: "img_#{product23.id}.jpg")

file24 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/toolbox.jpg')
product24.photoFile.attach(io: file24, filename: "img_#{product24.id}.jpg")

file25 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/water_spray.jpg')
product25.photoFile.attach(io: file25, filename: "img_#{product25.id}.jpg")

file26 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/wearable_weights.jpg')
product26.photoFile.attach(io: file26, filename: "img_#{product26.id}.jpg")

file27 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/yoga_mats.jpg')
product27.photoFile.attach(io: file27, filename: "img_#{product27.id}.jpg")

file28 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/air+fryer.jpg')
product28.photoFile.attach(io: file28, filename: "img_#{product28.id}.jpg")

file29 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/body_tape_measure.jpg')
product29.photoFile.attach(io: file29, filename: "img_#{product29.id}.jpg")

file30 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/hair_clippers.jpg')
product30.photoFile.attach(io: file30, filename: "img_#{product30.id}.jpg")

file31 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/honeywell_fan.jpg')
product31.photoFile.attach(io: file31, filename: "img_#{product31.id}.jpg")

file32 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/northface_backpack.jpg')
product32.photoFile.attach(io: file32, filename: "img_#{product32.id}.jpg")

file33 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/pen.jpg')
product33.photoFile.attach(io: file33, filename: "img_#{product33.id}.jpg")

file34 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/pencil_sharpener.jpg')
product34.photoFile.attach(io: file34, filename: "img_#{product34.id}.jpg")

file35 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/piggy_bank.jpg')
product35.photoFile.attach(io: file35, filename: "img_#{product35.id}.jpg")

file36 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/standing_fan.jpg')
product36.photoFile.attach(io: file36, filename: "img_#{product36.id}.jpg")

file37 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/vertical_mouse.jpg')
product37.photoFile.attach(io: file37, filename: "img_#{product37.id}.jpg")

file38 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/yellow_cup.jpg')
product38.photoFile.attach(io: file38, filename: "img_#{product38.id}.jpg")

file39 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/wine_rack.jpg')
product39.photoFile.attach(io: file39, filename: "img_#{product39.id}.jpg")

file40 = open('https://bidup-seed.s3-us-west-1.amazonaws.com/wireless_headphones2.jpg')
product40.photoFile.attach(io: file40, filename: "img_#{product40.id}.jpg")