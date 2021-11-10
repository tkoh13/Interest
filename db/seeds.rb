# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
User.destroy_all
Pin.destroy_all
Board.destroy_all

u1 = User.create!(email: "demo@demo.com", password: "demodemo", username: "demo_user")
up1 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-sergey-vinogradov.jpeg")
u1.photo.attach(io: up1, filename: "avatar-sergey-vinogradov.jpeg")

u2 = User.create!(email: "tyler@tyler.com", password: "tylertyler", username: "tyler")
up2 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-andres-molina.jpeg")
u2.photo.attach(io: up2, filename: "avatar-andres-molina.jpeg")

u3 = User.create!(email: "erin@erin.com", password: "erinerin", username: "erin")
up3 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-william-king.jpeg")
u3.photo.attach(io: up3, filename: "avatar-william-king.jpeg")

u4 = User.create!(email: "lilly@lilly.com", password: "lillylilly", username: "lilly")
up4 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-matthew-henry-1.jpeg")
u4.photo.attach(io: up4, filename: "avatar-matthew-henry-1.jpeg")

u5 = User.create!(email: "bean@bean.com", password: "beanbean", username: "bean")
up5 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-matthew-henry-2.jpeg")
u5.photo.attach(io: up5, filename: "avatar-matthew-henry-2.jpeg")

uIds = [u1.id, u2.id, u3.id, u4.id, u5.id]

p1 = Pin.create!(creator_id: uIds[0], title: "Getting Air!", description: "at the skate park")
ph1 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-andres-molina.jpeg")
p1.photo.attach(io: ph1, filename: "avatar-andres-molina.jpeg")

p2 = Pin.create!(creator_id: uIds[0], title: "Pumpkin Head", description: "spookkkyyy")
ph2 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-william-king.jpeg")
p2.photo.attach(io: ph2, filename: "avatar-william-king.jpeg")

p3 = Pin.create!(creator_id: uIds[0], title: "Pug in a Blanket", description: "Pug in a Blanket")
ph3 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-matthew-henry-1.jpeg")
p3.photo.attach(io: ph3, filename: "avatar-matthew-henry-1.jpeg")

p4 = Pin.create!(creator_id: uIds[0], title: "Pug in a Blanket", description: "Pug in a Blanket")
ph4 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-matthew-henry-2.jpeg")
p4.photo.attach(io: ph4, filename: "avatar-matthew-henry-2.jpeg")

p5 = Pin.create!(creator_id: uIds[0], title: "Face Wrapped", description: "in yarn?")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/avatar-sergey-vinogradov.jpeg")
p5.photo.attach(io: ph5, filename: "avatar-sergey-vinogradov.jpeg")

p6 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph6 = URI.open("https://interest-seed.s3.amazonaws.com/decor-annie-spratt.jpeg")
p6.photo.attach(io: ph6, filename: "decor-annie-spratt.jpeg")

p7 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph7 = URI.open("https://interest-seed.s3.amazonaws.com/decor-bench-accounting.jpeg")
p7.photo.attach(io: ph7, filename: "decor-bench-accounting.jpeg")

p8 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph8 = URI.open("https://interest-seed.s3.amazonaws.com/decor-borba.jpeg")
p8.photo.attach(io: ph8, filename: "decor-borba.jpeg")

p9 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph9 = URI.open("https://interest-seed.s3.amazonaws.com/decor-busing.jpeg")
p9.photo.attach(io: ph9, filename: "decor-busing.jpeg")

p10 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph10 = URI.open("https://interest-seed.s3.amazonaws.com/decor-collov-home-design.jpeg")
p10.photo.attach(io: ph10, filename: "decor-collov-home-design.jpeg")

p11 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph11 = URI.open("https://interest-seed.s3.amazonaws.com/decor-eugenivy-kitchen.jpeg")
p11.photo.attach(io: ph11, filename: "decor-eugenivy-kitchen.jpeg")

p12 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph12 = URI.open("https://interest-seed.s3.amazonaws.com/decor-eugenivy-pink.jpeg")
p12.photo.attach(io: ph12, filename: "decor-eugenivy-pink.jpeg")

p13 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph13 = URI.open("https://interest-seed.s3.amazonaws.com/decor-jamie-street.jpeg")
p13.photo.attach(io: ph13, filename: "decor-jamie-street.jpeg")

p14 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph14 = URI.open("https://interest-seed.s3.amazonaws.com/decor-jessica-sosey.jpeg")
p14.photo.attach(io: ph14, filename: "decor-jessica-sosey.jpeg")

p15 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph15 = URI.open("https://interest-seed.s3.amazonaws.com/decor-lance-anderson.jpeg")
p15.photo.attach(io: ph15, filename: "decor-lance-anderson.jpeg")

p16 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph16 = URI.open("https://interest-seed.s3.amazonaws.com/decor-laurence-katz.jpeg")
p16.photo.attach(io: ph16, filename: "decor-laurence-katz.jpeg")

p17 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph17 = URI.open("https://interest-seed.s3.amazonaws.com/decor-rumman-amin.jpeg")
p17.photo.attach(io: ph17, filename: "decor-rumman-amin.jpeg")

p18 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph18 = URI.open("https://interest-seed.s3.amazonaws.com/decor-sinitta-leunen.jpeg")
p18.photo.attach(io: ph18, filename: "decor-sinitta-leunen.jpeg")

p19 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph19 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-bedroom.jpeg")
p19.photo.attach(io: ph19, filename: "decor-spacejoy-bedroom.jpeg")

p20 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph20 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-green-living.jpeg")
p20.photo.attach(io: ph20, filename: "decor-spacejoy-green-living.jpeg")

p21 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph21 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-living-orange.jpeg")
p21.photo.attach(io: ph21, filename: "decor-spacejoy-living-orange.jpeg")

p22 = Pin.create!(creator_id: uIds[1], title: "", description: "")
ph22 = URI.open("https://interest-seed.s3.amazonaws.com/decor-steffen-lemmerzahl.jpeg")
p22.photo.attach(io: ph22, filename: "decor-steffen-lemmerzahl.jpeg")





p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")










p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")









p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

p5 = Pin.create!(creator_id: uIds[], title: "", description: "")
ph5 = URI.open("https://interest-seed.s3.amazonaws.com/")
p5.photo.attach(io: ph5, filename: "")

