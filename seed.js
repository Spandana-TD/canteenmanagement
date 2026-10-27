require("dns").setServers(["8.8.8.8","1.1.1.1"]);
require("dotenv").config();
const mongoose = require("mongoose");
const MenuItem = require("./models/MenuItem");

const items = [
  { name: "Idli (2 pcs)", category: "Breakfast", price: 25 },
  { name: "Masala Dosa", category: "Breakfast", price: 45 },
  { name: "Veg Meals", category: "Lunch", price: 70 },
  { name: "Chicken Biryani", category: "Lunch", price: 110 },
  { name: "Samosa", category: "Snacks", price: 15 },
  { name: "Veg Puff", category: "Snacks", price: 20 },
  { name: "Tea", category: "Drinks", price: 10 },
  { name: "Cold Coffee", category: "Drinks", price: 40 },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await MenuItem.deleteMany();
  await MenuItem.insertMany(items);
  console.log("Menu seeded");
  process.exit(0);
})();

