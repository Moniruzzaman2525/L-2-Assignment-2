# Stationery Products Shop Management 

- An application developed using Typescript, Express, MongoDB and Mongoose that manages stationery shop products, orders, and inventory.


## Feather

### Product Management
- Add, update, delete and retrieve stationery shop product.
- Ensures All field validation.

### Order Management
- Orders can be placed with real-time inventory updates.
- Handle insufficient stock.
- Calculate and retrieve total revenue.

### Validation
- Custom error handling for better API response

### Error Handling
- Custom error handling middleware


## Project Setup

### Technologies
- Typescript
- Node.js
- Express.js
- Mongoose

### Install Dependencies
- npm install typescript --save-dev
- npm install mongoose --save
- npm install express
- npm i cors
- npm i dotenv


## API Endpoints

### Products
- Create a Stationery Product: ```POST``` ```/api/products```
- Get All Stationery Products: GET /api/products
- Get a Specific Stationery Product: GET /api/products/:productId
- Update a Stationery Product: PUT /api/products/:productId
- Delete a Stationery Product: DELETE /api/products/:productId

### Orders
- Order a Stationery Product: POST /api/orders
- Calculate Revenue from Orders: GET /api/orders/revenue