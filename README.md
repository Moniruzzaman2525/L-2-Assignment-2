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

### Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Moniruzzaman2525/L2-stationery-shop.git

cd L2-stationery-shop

npm install
```
### 2. .env file

Provide the `PORT` and `DATABASE_URL` inside the `.env` file.

## Start the Server

```bash
npm run start:dev
```
### To start the production mode:

```bash
npm run start:prod
```

### To format the code:

```bash
npm run format
```

To automatically fix linting:

```bash
npm run lint:fix
```

## API Endpoints

### Products

- Create a Stationery Product: `POST` `/api/products`
- Get All Stationery Products: `GET` `/api/products`
- Get a Specific Stationery Product: `GET` `/api/products/:productId`
- Update a Stationery Product: `PUT` `/api/products/:productId`
- Delete a Stationery Product: `DELETE` `/api/products/:productId`

### Orders

- Order a Stationery Product: `POST` `/api/orders`
- Calculate Revenue from Orders: `GET` `/api/orders/revenue`

## Contact

For any questions or support, please reach out to:
### Md Moniruzzaman
### Email: [web.moniruzzaman1@gmail.com]
