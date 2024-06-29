# Shopping Mall API

This project is a basic REST API built using NestJS for managing a list of products and categories in a database. The API provides CRUD operations to manipulate categories and products, including a relationship between them.

## Features

### Categories

- **Attributes:**
  - Title
  - Description

### Products

- **Attributes:**
  - Title
  - Description
  - SKU (unique, exactly 8 characters long)
  - Price
  - Category (each product belongs to a single category)

## Endpoints

### Products

- **Create a product:**
  - **POST** `/api/products`
- **Get all products with pagination and filtering:**
  - **GET** `/api/products`
- **Get product by ID with category relation:**
  - **GET** `/api/products/{id}`
- **Update a product:**
  - **PATCH** `/api/products/{id}`
- **Delete a product:**
  - **DELETE** `/api/products/{id}`

### Categories

- **Create a category:**
  - **POST** `/api/categories`
- **Get all categories with pagination and filtering:**
  - **GET** `/api/categories`
- **Get category by ID:**
  - **GET** `/api/categories/{id}`
- **Update a category:**
  - **PATCH** `/api/categories/{id}`
- **Delete a category:**
  - **DELETE** `/api/categories/{id}`

## Swagger Documentation

- Explore and test the API endpoints using Swagger UI.
- Access the Swagger UI at [http://localhost:3000/docs](http://localhost:3000/docs).

## Installation

1. **Clone this repository**
2. **Navigate to the project directory**
3. **Copy `.env.example` to `.env` and configure all necessary environment variables**
4. **Install dependencies with `npm install`**
5. **Run database migrations with `npm run migration:run`**
6. **Seed the database with initial data using `npm run seed`**
7. **Start the server:**
- **Development mode:** `npm run start:dev`
- **Production mode:** `npm run start`
8. **Use the API and enjoy!**
