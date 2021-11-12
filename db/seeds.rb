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



b1 = Board.create!(creator_id: uIds[0], title: "Random", description: "Random")
b2 = Board.create!(creator_id: uIds[1], title: "Home Decor", description: "Home Decor")
b3 = Board.create!(creator_id: uIds[2], title: "Fashion", description: "Fashion")
b4 = Board.create!(creator_id: uIds[3], title: "Travel", description: "Travel")
b5 = Board.create!(creator_id: uIds[4], title: "Food", description: "Food")



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



btp1 = BoardToPin.create!(board_id: b1.id, pin_id: p1.id)
btp2 = BoardToPin.create!(board_id: b1.id, pin_id: p2.id)
btp3 = BoardToPin.create!(board_id: b1.id, pin_id: p3.id)
btp4 = BoardToPin.create!(board_id: b1.id, pin_id: p4.id)
btp5 = BoardToPin.create!(board_id: b1.id, pin_id: p5.id)



p6 = Pin.create!(creator_id: uIds[1], title: "Home office inspo", description: "Dream home office setup!")
ph6 = URI.open("https://interest-seed.s3.amazonaws.com/decor-annie-spratt.jpeg")
p6.photo.attach(io: ph6, filename: "decor-annie-spratt.jpeg")

p7 = Pin.create!(creator_id: uIds[1], title: "Green Space", description: "I need this in my life")
ph7 = URI.open("https://interest-seed.s3.amazonaws.com/decor-bench-accounting.jpeg")
p7.photo.attach(io: ph7, filename: "decor-bench-accounting.jpeg")

p8 = Pin.create!(creator_id: uIds[1], title: "Cool staircase", description: "For dream home one day")
ph8 = URI.open("https://interest-seed.s3.amazonaws.com/decor-borba.jpeg")
p8.photo.attach(io: ph8, filename: "decor-borba.jpeg")

p9 = Pin.create!(creator_id: uIds[1], title: "Minimal Coffee Table", description: "A coffee table")
ph9 = URI.open("https://interest-seed.s3.amazonaws.com/decor-busing.jpeg")
p9.photo.attach(io: ph9, filename: "decor-busing.jpeg")

p10 = Pin.create!(creator_id: uIds[1], title: "Home Office", description: "I love this green accent wall")
ph10 = URI.open("https://interest-seed.s3.amazonaws.com/decor-collov-home-design.jpeg")
p10.photo.attach(io: ph10, filename: "decor-collov-home-design.jpeg")

p11 = Pin.create!(creator_id: uIds[1], title: "Beautiful Kitchen", description: "that stove...")
ph11 = URI.open("https://interest-seed.s3.amazonaws.com/decor-eugenivy-kitchen.jpeg")
p11.photo.attach(io: ph11, filename: "decor-eugenivy-kitchen.jpeg")

p12 = Pin.create!(creator_id: uIds[1], title: "Piiiink!", description: "A pink sink")
ph12 = URI.open("https://interest-seed.s3.amazonaws.com/decor-eugenivy-pink.jpeg")
p12.photo.attach(io: ph12, filename: "decor-eugenivy-pink.jpeg")

p13 = Pin.create!(creator_id: uIds[1], title: "Cozy Puppy", description: "Cozy Puppy")
ph13 = URI.open("https://interest-seed.s3.amazonaws.com/decor-jamie-street.jpeg")
p13.photo.attach(io: ph13, filename: "decor-jamie-street.jpeg")

p14 = Pin.create!(creator_id: uIds[1], title: "Open Kitchen", description: "Open Kitchen")
ph14 = URI.open("https://interest-seed.s3.amazonaws.com/decor-jessica-sosey.jpeg")
p14.photo.attach(io: ph14, filename: "decor-jessica-sosey.jpeg")

p15 = Pin.create!(creator_id: uIds[1], title: "Office Setup", description: "Sooo coool")
ph15 = URI.open("https://interest-seed.s3.amazonaws.com/decor-lance-anderson.jpeg")
p15.photo.attach(io: ph15, filename: "decor-lance-anderson.jpeg")

p16 = Pin.create!(creator_id: uIds[1], title: "Cool Built-ins", description: "Shelves!")
ph16 = URI.open("https://interest-seed.s3.amazonaws.com/decor-laurence-katz.jpeg")
p16.photo.attach(io: ph16, filename: "decor-laurence-katz.jpeg")

p17 = Pin.create!(creator_id: uIds[1], title: "Dream Living Room", description: "Velvet Couch!")
ph17 = URI.open("https://interest-seed.s3.amazonaws.com/decor-rumman-amin.jpeg")
p17.photo.attach(io: ph17, filename: "decor-rumman-amin.jpeg")

p18 = Pin.create!(creator_id: uIds[1], title: "By Sinitta Leunen", description: "By Sinitta Leunen")
ph18 = URI.open("https://interest-seed.s3.amazonaws.com/decor-sinitta-leunen.jpeg")
p18.photo.attach(io: ph18, filename: "decor-sinitta-leunen.jpeg")

p19 = Pin.create!(creator_id: uIds[1], title: "Amazing Bedroom Design", description: "Woooowwww")
ph19 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-bedroom.jpeg")
p19.photo.attach(io: ph19, filename: "decor-spacejoy-bedroom.jpeg")

p20 = Pin.create!(creator_id: uIds[1], title: "Colors!", description: "green-yellow?")
ph20 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-green-living.jpeg")
p20.photo.attach(io: ph20, filename: "decor-spacejoy-green-living.jpeg")

p21 = Pin.create!(creator_id: uIds[1], title: "I need this in my life", description: "spcejoy")
ph21 = URI.open("https://interest-seed.s3.amazonaws.com/decor-spacejoy-living-orange.jpeg")
p21.photo.attach(io: ph21, filename: "decor-spacejoy-living-orange.jpeg")

p22 = Pin.create!(creator_id: uIds[1], title: "Cold but warm", description: "Cold but warm")
ph22 = URI.open("https://interest-seed.s3.amazonaws.com/decor-steffen-lemmerzahl.jpeg")
p22.photo.attach(io: ph22, filename: "decor-steffen-lemmerzahl.jpeg")



btp6 = BoardToPin.create!(board_id: b2.id, pin_id: p6.id)
btp7 = BoardToPin.create!(board_id: b2.id, pin_id: p7.id)
btp8 = BoardToPin.create!(board_id: b2.id, pin_id: p8.id)
btp9 = BoardToPin.create!(board_id: b2.id, pin_id: p9.id)
btp10 = BoardToPin.create!(board_id: b2.id, pin_id: p10.id)
btp11 = BoardToPin.create!(board_id: b2.id, pin_id: p11.id)
btp12 = BoardToPin.create!(board_id: b2.id, pin_id: p12.id)
btp13 = BoardToPin.create!(board_id: b2.id, pin_id: p13.id)
btp14 = BoardToPin.create!(board_id: b2.id, pin_id: p14.id)
btp15 = BoardToPin.create!(board_id: b2.id, pin_id: p15.id)
btp16 = BoardToPin.create!(board_id: b2.id, pin_id: p16.id)
btp17 = BoardToPin.create!(board_id: b2.id, pin_id: p17.id)
btp18 = BoardToPin.create!(board_id: b2.id, pin_id: p18.id)
btp19 = BoardToPin.create!(board_id: b2.id, pin_id: p19.id)
btp20 = BoardToPin.create!(board_id: b2.id, pin_id: p20.id)
btp21 = BoardToPin.create!(board_id: b2.id, pin_id: p21.id)
btp22 = BoardToPin.create!(board_id: b2.id, pin_id: p22.id)



p23 = Pin.create!(creator_id: uIds[2], title: "green beanie", description: "green beanie")
ph23 = URI.open("https://interest-seed.s3.amazonaws.com/drip-ali-choubin.jpeg")
p23.photo.attach(io: ph23, filename: "drip-ali-choubin.jpeg")

p24 = Pin.create!(creator_id: uIds[2], title: "Amazing shot", description: "by ben masora")
ph24 = URI.open("https://interest-seed.s3.amazonaws.com/drip-ben-masora.jpeg")
p24.photo.attach(io: ph24, filename: "drip-ben-masora.jpeg")

p25 = Pin.create!(creator_id: uIds[2], title: "These colors are amazing", description: "by bradley zorbas")
ph25 = URI.open("https://interest-seed.s3.amazonaws.com/drip-bradley-zorbas.jpeg")
p25.photo.attach(io: ph25, filename: "drip-bradley-zorbas.jpeg")

p26 = Pin.create!(creator_id: uIds[2], title: "Homeless or fashion?", description: "drip")
ph26 = URI.open("https://interest-seed.s3.amazonaws.com/drip-dima-dallAcqua.jpeg")
p26.photo.attach(io: ph26, filename: "drip-dima-dallAcqua.jpeg")

p27 = Pin.create!(creator_id: uIds[2], title: "houcine-ncib", description: "houcine-ncib")
ph27 = URI.open("https://interest-seed.s3.amazonaws.com/drip-houcine-ncib.jpeg")
p27.photo.attach(io: ph27, filename: "drip-houcine-ncib.jpeg")

p28 = Pin.create!(creator_id: uIds[2], title: "ilya-mirnyy", description: "ilya-mirnyy")
ph28 = URI.open("https://interest-seed.s3.amazonaws.com/drip-ilya-mirnyy.jpeg")
p28.photo.attach(io: ph28, filename: "drip-ilya-mirnyy.jpeg")

p29 = Pin.create!(creator_id: uIds[2], title: "drip-joecalih", description: "drip-joecalih")
ph29 = URI.open("https://interest-seed.s3.amazonaws.com/drip-joecalih.jpeg")
p29.photo.attach(io: ph29, filename: "drip-joecalih.jpeg")

p30 = Pin.create!(creator_id: uIds[2], title: "natasha-kasim", description: "natasha-kasim")
ph30 = URI.open("https://interest-seed.s3.amazonaws.com/drip-natasha-kasim.jpeg")
p30.photo.attach(io: ph30, filename: "drip-natasha-kasim.jpeg")

p31 = Pin.create!(creator_id: uIds[2], title: "reza-delkhosh", description: "reza-delkhosh")
ph31 = URI.open("https://interest-seed.s3.amazonaws.com/drip-reza-delkhosh.jpeg")
p31.photo.attach(io: ph31, filename: "drip-reza-delkhosh.jpeg")

p32 = Pin.create!(creator_id: uIds[2], title: "sobhan-joodi", description: "sobhan-joodi")
ph32 = URI.open("https://interest-seed.s3.amazonaws.com/drip-sobhan-joodi.jpeg")
p32.photo.attach(io: ph32, filename: "drip-sobhan-joodi.jpeg")

p33 = Pin.create!(creator_id: uIds[2], title: "j.balla", description: "j.balla")
ph33 = URI.open("https://interest-seed.s3.amazonaws.com/makeup-j.balla.jpeg")
p33.photo.attach(io: ph33, filename: "makeup-j.balla.jpeg")

p34 = Pin.create!(creator_id: uIds[2], title: "yash-mevawala", description: "yash-mevawala")
ph34 = URI.open("https://interest-seed.s3.amazonaws.com/makeup-yash-mevawala.jpeg")
p34.photo.attach(io: ph34, filename: "makeup-yash-mevawala.jpeg")



btp23 = BoardToPin.create!(board_id: b3.id, pin_id: p23.id)
btp24 = BoardToPin.create!(board_id: b3.id, pin_id: p24.id)
btp25 = BoardToPin.create!(board_id: b3.id, pin_id: p25.id)
btp26 = BoardToPin.create!(board_id: b3.id, pin_id: p26.id)
btp27 = BoardToPin.create!(board_id: b3.id, pin_id: p27.id)
btp28 = BoardToPin.create!(board_id: b3.id, pin_id: p28.id)
btp29 = BoardToPin.create!(board_id: b3.id, pin_id: p29.id)
btp30 = BoardToPin.create!(board_id: b3.id, pin_id: p30.id)
btp31 = BoardToPin.create!(board_id: b3.id, pin_id: p31.id)
btp32 = BoardToPin.create!(board_id: b3.id, pin_id: p32.id)
btp33 = BoardToPin.create!(board_id: b3.id, pin_id: p33.id)
btp34 = BoardToPin.create!(board_id: b3.id, pin_id: p34.id)



p35 = Pin.create!(creator_id: uIds[3], title: "Travel Goals", description: "ocean please")
ph35 = URI.open("https://interest-seed.s3.amazonaws.com/travel-art-rachen.jpeg")
p35.photo.attach(io: ph35, filename: "travel-art-rachen.jpeg")

p36 = Pin.create!(creator_id: uIds[3], title: "10 Places to Travel this Year", description: "chua-zi-hui")
ph36 = URI.open("https://interest-seed.s3.amazonaws.com/travel-chua-zi-hui.jpeg")
p36.photo.attach(io: ph36, filename: "travel-chua-zi-hui.jpeg")

p37 = Pin.create!(creator_id: uIds[3], title: "10 Places to Travel this Year", description: "daniel-j-schwarz")
ph37 = URI.open("https://interest-seed.s3.amazonaws.com/travel-daniel-j-schwarz.jpeg")
p37.photo.attach(io: ph37, filename: "travel-daniel-j-schwarz.jpeg")

p38 = Pin.create!(creator_id: uIds[3], title: "10 Places to Travel this Year", description: "dika-pebriyanta")
ph38 = URI.open("https://interest-seed.s3.amazonaws.com/travel-dika-pebriyanta.jpeg")
p38.photo.attach(io: ph38, filename: "travel-dika-pebriyanta.jpeg")

p39 = Pin.create!(creator_id: uIds[3], title: "mark-zu", description: "mark-zu")
ph39 = URI.open("https://interest-seed.s3.amazonaws.com/travel-mark-zu.jpeg")
p39.photo.attach(io: ph39, filename: "travel-mark-zu.jpeg")

p40 = Pin.create!(creator_id: uIds[3], title: "philip-jahn", description: "philip-jahn")
ph40 = URI.open("https://interest-seed.s3.amazonaws.com/travel-philip-jahn.jpeg")
p40.photo.attach(io: ph40, filename: "travel-philip-jahn.jpeg")

p41 = Pin.create!(creator_id: uIds[3], title: "roman-raizen", description: "roman-raizen")
ph41 = URI.open("https://interest-seed.s3.amazonaws.com/travel-roman-raizen.jpeg")
p41.photo.attach(io: ph41, filename: "travel-roman-raizen.jpeg")

p42 = Pin.create!(creator_id: uIds[3], title: "romeo-a", description: "romeo-a")
ph42 = URI.open("https://interest-seed.s3.amazonaws.com/travel-romeo-a.jpeg")
p42.photo.attach(io: ph42, filename: "travel-romeo-a.jpeg")

p43 = Pin.create!(creator_id: uIds[3], title: "salmen-bejaoui", description: "salmen-bejaoui")
ph43 = URI.open("https://interest-seed.s3.amazonaws.com/travel-salmen-bejaoui.jpeg")
p43.photo.attach(io: ph43, filename: "travel-salmen-bejaoui.jpeg")

p44 = Pin.create!(creator_id: uIds[3], title: "spencer-davis", description: "spencer-davis")
ph44 = URI.open("https://interest-seed.s3.amazonaws.com/travel-spencer-davis.jpeg")
p44.photo.attach(io: ph44, filename: "travel-spencer-davis.jpeg")

p45 = Pin.create!(creator_id: uIds[3], title: "zoltan-tasi", description: "zoltan-tasi")
ph45 = URI.open("https://interest-seed.s3.amazonaws.com/travel-zoltan-tasi.jpeg")
p45.photo.attach(io: ph45, filename: "travel-zoltan-tasi.jpeg")



btp35 = BoardToPin.create!(board_id: b4.id, pin_id: p35.id)
btp36 = BoardToPin.create!(board_id: b4.id, pin_id: p36.id)
btp37 = BoardToPin.create!(board_id: b4.id, pin_id: p37.id)
btp38 = BoardToPin.create!(board_id: b4.id, pin_id: p38.id)
btp39 = BoardToPin.create!(board_id: b4.id, pin_id: p39.id)
btp40 = BoardToPin.create!(board_id: b4.id, pin_id: p40.id)
btp41 = BoardToPin.create!(board_id: b4.id, pin_id: p41.id)
btp42 = BoardToPin.create!(board_id: b4.id, pin_id: p42.id)
btp43 = BoardToPin.create!(board_id: b4.id, pin_id: p43.id)
btp44 = BoardToPin.create!(board_id: b4.id, pin_id: p44.id)
btp45 = BoardToPin.create!(board_id: b4.id, pin_id: p45.id)



p46 = Pin.create!(creator_id: uIds[3], title: "Brownies!", description: "I cant get enough")
ph46 = URI.open("https://interest-seed.s3.amazonaws.com/food-svitlana.jpeg")
p46.photo.attach(io: ph46, filename: "food-svitlana.jpeg")

p47 = Pin.create!(creator_id: uIds[3], title: "Cast Iron - 10 reasons why", description: "Bread")
ph47 = URI.open("https://interest-seed.s3.amazonaws.com/food-adana-eisagholian.jpeg")
p47.photo.attach(io: ph47, filename: "food-adana-eisagholian.jpeg")

p48 = Pin.create!(creator_id: uIds[4], title: "I could kill for some burgers", description: "Like for real though")
ph48 = URI.open("https://interest-seed.s3.amazonaws.com/food-anshu-a.jpeg")
p48.photo.attach(io: ph48, filename: "food-anshu-a.jpeg")

p49 = Pin.create!(creator_id: uIds[4], title: "Donuts!", description: "my favorite")
ph49 = URI.open("https://interest-seed.s3.amazonaws.com/food-clark-douglas.jpeg")
p49.photo.attach(io: ph49, filename: "food-clark-douglas.jpeg")

p50 = Pin.create!(creator_id: uIds[4], title: "Yum!", description: "IDK what this is but it looks good")
ph50 = URI.open("https://interest-seed.s3.amazonaws.com/food-donut-the-blackrabbit.jpeg")
p50.photo.attach(io: ph50, filename: "food-donut-the-blackrabbit.jpeg")

p51 = Pin.create!(creator_id: uIds[4], title: "Plating on Point", description: "Eating with your eyes first")
ph51 = URI.open("https://interest-seed.s3.amazonaws.com/food-febrian-zakaria.jpeg")
p51.photo.attach(io: ph51, filename: "food-febrian-zakaria.jpeg")

p52 = Pin.create!(creator_id: uIds[4], title: "Soup", description: "I think...")
ph52 = URI.open("https://interest-seed.s3.amazonaws.com/food-hamide-jafari.jpeg")
p52.photo.attach(io: ph52, filename: "food-hamide-jafari.jpeg")

p53 = Pin.create!(creator_id: uIds[4], title: "Wrapss on wraps", description: "ok i guess")
ph53 = URI.open("https://interest-seed.s3.amazonaws.com/food-jojo-yuen.jpeg")
p53.photo.attach(io: ph53, filename: "food-jojo-yuen.jpeg")

p54 = Pin.create!(creator_id: uIds[4], title: "karolina-kolodziejczak", description: "karolina-kolodziejczak")
ph54 = URI.open("https://interest-seed.s3.amazonaws.com/food-karolina-kolodziejczak-2.jpeg")
p54.photo.attach(io: ph54, filename: "food-karolina-kolodziejczak-2.jpeg")

p55 = Pin.create!(creator_id: uIds[4], title: "Waffles!", description: "everyday")
ph55 = URI.open("https://interest-seed.s3.amazonaws.com/food-karolina-kolodziejczak.jpeg")
p55.photo.attach(io: ph55, filename: "food-karolina-kolodziejczak.jpeg")

p56 = Pin.create!(creator_id: uIds[4], title: "Waffles", description: "waffles")
ph56 = URI.open("https://interest-seed.s3.amazonaws.com/food-kevin-woblick.jpeg")
p56.photo.attach(io: ph56, filename: "food-kevin-woblick.jpeg")

p57 = Pin.create!(creator_id: uIds[4], title: "nathan-dumlao", description: "nathan-dumlao")
ph57 = URI.open("https://interest-seed.s3.amazonaws.com/food-nathan-dumlao.jpeg")
p57.photo.attach(io: ph57, filename: "food-nathan-dumlao.jpeg")

p58 = Pin.create!(creator_id: uIds[4], title: "slashio", description: "slashio")
ph58 = URI.open("https://interest-seed.s3.amazonaws.com/food-slashio-photography.jpeg")
p58.photo.attach(io: ph58, filename: "food-slashio-photography.jpeg")



btp46 = BoardToPin.create!(board_id: b5.id, pin_id: p46.id)
btp47 = BoardToPin.create!(board_id: b5.id, pin_id: p47.id)
btp48 = BoardToPin.create!(board_id: b5.id, pin_id: p48.id)
btp49 = BoardToPin.create!(board_id: b5.id, pin_id: p49.id)
btp50 = BoardToPin.create!(board_id: b5.id, pin_id: p50.id)
btp51 = BoardToPin.create!(board_id: b5.id, pin_id: p51.id)
btp52 = BoardToPin.create!(board_id: b5.id, pin_id: p52.id)
btp53 = BoardToPin.create!(board_id: b5.id, pin_id: p53.id)
btp54 = BoardToPin.create!(board_id: b5.id, pin_id: p54.id)
btp55 = BoardToPin.create!(board_id: b5.id, pin_id: p55.id)
btp56 = BoardToPin.create!(board_id: b5.id, pin_id: p56.id)
btp57 = BoardToPin.create!(board_id: b5.id, pin_id: p57.id)
btp58 = BoardToPin.create!(board_id: b5.id, pin_id: p58.id)

