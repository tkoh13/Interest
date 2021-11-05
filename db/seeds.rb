# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all

u1 = User.create!(email: "demo@demo.com", password: "demodemo", username: "demo_user")
u1 = User.create!(email: "test2@test.com", password: "testtest", username: "test2_user")
u1 = User.create!(email: "test3@test.com", password: "testtest", username: "test3_user")

p1 = Pin.create!(creator_id: "1", title: "A Donut!!", description: "black rabbit donut")
p2 = Pin.create!(creator_id: "2", title: "test2", description: "testing2")
p3 = Pin.create!(creator_id: "3", title: "test3", description: "testing3")