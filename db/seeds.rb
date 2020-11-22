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

bid1 = Bid.create!(bid_amount: 10, product_id: 37, bidder_id: 1, seller_id: 9, productName: "Vertical mouse")
bid2 = Bid.create!(bid_amount: 5, product_id: 38, bidder_id: 2, seller_id: 9, productName: "Yellow Cup")
bid3 = Bid.create!(bid_amount: 30, product_id: 39, bidder_id: 3, seller_id: 2, productName: "Wine rack")
bid4 = Bid.create!(bid_amount: 12, product_id: 40, bidder_id: 4, seller_id: 12, productName: "Black wireless headphones")
bid5 = Bid.create!(bid_amount: 7, product_id: 31, bidder_id: 5, seller_id: 3, productName: "Honeywell fan")
bid6 = Bid.create!(bid_amount: 25, product_id: 32, bidder_id: 6, seller_id: 3, productName: "Northface backpack")
bid7 = Bid.create!(bid_amount: 8, product_id: 34, bidder_id: 7, seller_id: 3, productName: "Pencil Sharpener")
bid8 = Bid.create!(bid_amount: 10, product_id: 35, bidder_id: 8, seller_id: 13, productName: "Piggy Bank")
bid9 = Bid.create!(bid_amount: 15, product_id: 26, bidder_id: 9, seller_id: 13, productName: "Wearable body weights")
bid10 = Bid.create!(bid_amount: 20, product_id: 27, bidder_id: 10, seller_id: 13, productName: "Yoga mats")
bid11 = Bid.create!(bid_amount: 35, product_id: 28, bidder_id: 11, seller_id: 2, productName: "Air fryer")
bid12 = Bid.create!(bid_amount: 1, product_id: 29, bidder_id: 12, seller_id: 2, productName: "Body tape measure")
bid13 = Bid.create!(bid_amount: 12, product_id: 21, bidder_id: 13, seller_id: 14, productName: "Resistance bands")
bid14 = Bid.create!(bid_amount: 3, product_id: 22, bidder_id: 14, seller_id: 14, productName: "Scissors")
bid15 = Bid.create!(bid_amount: 60, product_id: 23, bidder_id: 13, seller_id: 14, productName: "Suitcase")
bid16 = Bid.create!(bid_amount: 32, product_id: 24, bidder_id: 2, seller_id: 10, productName: "Toolkit with carrying case")
bid17 = Bid.create!(bid_amount: 20, product_id: 16, bidder_id: 3, seller_id: 10, productName: "Incase laptop bag")
bid18 = Bid.create!(bid_amount: 8, product_id: 17, bidder_id: 4, seller_id: 10, productName: "Bluelight Glasses")
bid19 = Bid.create!(bid_amount: 40, product_id: 18, bidder_id: 5, seller_id: 11, productName: "Candle")
bid20 = Bid.create!(bid_amount: 5, product_id: 19, bidder_id: 6, seller_id: 12, productName: "Facemasks")
bid21 = Bid.create!(bid_amount: 45, product_id: 11, bidder_id: 7, seller_id: 4, productName: "Paralettes")
bid22 = Bid.create!(bid_amount: 75, product_id: 12, bidder_id: 8, seller_id: 5, productName: "Sennheiser headphones")
bid23 = Bid.create!(bid_amount: 10, product_id: 13, bidder_id: 9, seller_id: 6, productName: "Wireless Speaker")
bid24 = Bid.create!(bid_amount: 80, product_id: 14, bidder_id: 10, seller_id: 8, productName: "Electric upper body massage chair")
bid25 = Bid.create!(bid_amount: 85, product_id: 10, bidder_id: 1, seller_id: 3, productName: "Mechanical Keyboard")
bid26 = Bid.create!(bid_amount: 25, product_id: 1, bidder_id: 14, seller_id: 1, productName: "Skateboard")

review1 = Review.create!(rating: 5, reviewer_id: 1, reviewee_id: 14, reviewer_name: "demo_user", feedback: "Carlos is an outstanding seller to work with! Would buy from him again!")
review2 = Review.create!(rating: 5, reviewer_id: 2, reviewee_id: 13, reviewer_name: "jon", feedback: "Easy and smooth transaction. Highly recommend!")
review3 = Review.create!(rating: 5, reviewer_id: 3, reviewee_id: 12, reviewer_name: "jd", feedback: "Good seller!")
review4 = Review.create!(rating: 5, reviewer_id: 4, reviewee_id: 11, reviewer_name: "chris", feedback: "This guy is the best! He even played me a tune afterwards.")
review5 = Review.create!(rating: 5, reviewer_id: 5, reviewee_id: 10, reviewer_name: "jacky", feedback: "Pleasure to do business with!")
review6 = Review.create!(rating: 5, reviewer_id: 6, reviewee_id: 9, reviewer_name: "tri", feedback: "Amazing!")
review7 = Review.create!(rating: 5, reviewer_id: 7, reviewee_id: 8, reviewer_name: "taylor", feedback: "Jen was awesome!")
review8 = Review.create!(rating: 2, reviewer_id: 8, reviewee_id: 7, reviewer_name: "jen", feedback: "She was super late to meet when I tried to buy her gaming chair.")
review9 = Review.create!(rating: 3, reviewer_id: 9, reviewee_id: 6, reviewer_name: "julia", feedback: "Tri forgot to bring the product, but still gets a 3 since he was super nice.")
review10 = Review.create!(rating: 2, reviewer_id: 10, reviewee_id: 5, reviewer_name: "ryan", feedback: "Jacky provided a sloppy transaction. Truthy.")
review11 = Review.create!(rating: 1, reviewer_id: 11, reviewee_id: 4, reviewer_name: "zack", feedback: "Chris was singing when I met him and it hurt my ears.")
review12 = Review.create!(rating: 2, reviewer_id: 12, reviewee_id: 3, reviewer_name: "lina", feedback: "I think JD might have been intoxicated. Unprofessional!")
review13 = Review.create!(rating: 4, reviewer_id: 13, reviewee_id: 2, reviewer_name: "erik", feedback: "Jon sold me the nicest pink sweater I've ever purchased!")
review14 = Review.create!(rating: 4, reviewer_id: 14, reviewee_id: 1, reviewer_name: "carlos", feedback: "Great seller!")
review15 = Review.create!(rating: 3, reviewer_id: 3, reviewee_id: 9, reviewer_name: "jd", feedback: "Okay to work with.")
review16 = Review.create!(rating: 4, reviewer_id: 2, reviewee_id: 10, reviewer_name: "jon", feedback: "Simple and smooth transaction.")
review17 = Review.create!(rating: 1, reviewer_id: 10, reviewee_id: 3, reviewer_name: "ryan", feedback: "Product was not as described")
review18 = Review.create!(rating: 2, reviewer_id: 3, reviewee_id: 2, reviewer_name: "lina", feedback: "He said his stomach hurt and never showed up!")
review19 = Review.create!(rating: 3, reviewer_id: 4, reviewee_id: 5, reviewer_name: "chris", feedback: "Average transaction.")
review20 = Review.create!(rating: 4, reviewer_id: 13, reviewee_id: 14, reviewer_name: "erik", feedback: "This seller gets buckets!!")



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