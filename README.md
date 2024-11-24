# Stationery Products Shop Management

- An application developed using Typescript, Express, MongoDB and Mongoose that manages stationery shop products, orders, and inventory.

## Feather

- Add, update, delete and retrieve stationery shop product.
- Facility to View All or Specific product Details.
- Orders can be placed with real-time inventory updates.
- Handle insufficient stock.
- Calculate and retrieve total revenue.

### Error Handling

- Custom error handling middleware

## Project Setup

### Development Tools:

- **Mongoose** – A powerful ODM (Object Data Modeling) library for interacting with MongoDB databases.
- **ts-node-dev** – For running TypeScript code in development mode.
- **ESLint** – Helps maintain code quality by identifying and fixing syntax and style issues.
- **Prettier** – Automatically formats code to ensure a consistent and readable style.

### Database:

- **MongoDB** – Serves as the database for managing Stationery Shop and order records.

### Additional Configuration

- Make sure MongoDB is available on your machine (either locally or through a cloud service). Set up a .env file to configure the database connection.
- For the best experience, run the application in a modern browser.

## Setup Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Moniruzzaman2525/L2-stationery-shop.git

cd L2-stationery-shop

npm install
```
### 2. .env file

Provide the `PORT` and `DATABASE_URL` inside the `.env` file.

### 3. Start the Server

```bash
npm run start:dev
```
To start the production mode:

```bash
npm run start
```

format code:

```bash
npm run format
```

Automatically fix linting:

```bash
npm run lint:fix
```

## API Endpoints

1. Create a Stationery Product: `POST` `/api/products`
2. Get All Stationery Products: `GET` `/api/products`
3. Get a Specific Stationery Product: `GET` `/api/products/:productId`
4. Update a Stationery Product: `PUT` `/api/products/:productId`
5. Delete a Stationery Product: `DELETE` `/api/products/:productId`
6. Order a Stationery Product: `POST` `/api/orders`
7. Calculate Revenue from Orders: `GET` `/api/orders/revenue`

## Contact

For any questions or support, please reach out to: [web.moniruzzaman1@gmail.com]
