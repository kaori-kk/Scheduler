# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

users = User.create([
  {
    first_name: "Kaori",
    last_name: "Kohama",
    email: "test@test.com",
    password: "123456"
  },
  {
    first_name: "Test",
    last_name: "Test",
    email: "test1@test.com",
    password: "111111"
  }
])

journal = Journal.create([
  {
    user_id: 1,
    title: "happy day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01/06/2020 17:00"
  },
  {
    user_id: 1,
    title: "Chill day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "12/05/2020 18:00"
  }
])
