# Canteen Management System (MERN)

A basic canteen management app built with **MongoDB, Express, React (Vite) and Node.js**.

## Features
- Browse the menu grouped by category and build a tray
- Place orders (prices are calculated on the server)
- Kitchen queue: move orders Pending → Preparing → Ready → Completed
- Add, delete and mark menu items sold out

## Project structure
```
canteen-management/
├── server/   Express API + Mongoose models (MenuItem, Order)
└── client/   React app (Vite)
```

## Prerequisites
- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

## Run it
```bash
git clone <your-repo-url>
cd canteen-management

npm run install-all

cp server/.env.example server/.env     # edit MONGO_URI if needed

npm run seed                            # optional: sample menu

# in two terminals
npm run server                          # API on http://localhost:5000
npm run client                          # App on http://localhost:5173
```

## API
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/menu` | List menu items |
| POST | `/api/menu` | Add item |
| PUT | `/api/menu/:id` | Update item |
| DELETE | `/api/menu/:id` | Delete item |
| GET | `/api/orders` | List orders |
| POST | `/api/orders` | Place order |
| PATCH | `/api/orders/:id/status` | Update status |

## Ideas to extend
- JWT login with student and admin roles
- Payment integration
- Live order updates with Socket.IO
- Daily sales report
