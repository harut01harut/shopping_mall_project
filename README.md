# Shopping Mall API

This project is a basic REST API built using NestJS for managing a list of products and categories in a database. The API provides CRUD operations to manipulate categories, products and includes a relation to categories.

## Features

- **Categories**
    - Title
    - Description

- **Products**
    - Title
    - Description
    - SKU (unique and exactly 8 characters long)
    - Price
    - Category (each product belongs to a single category)

## Endpoints

### Products

- **Create a product**
    - **POST** `/api/products`
- **Get all products with pagination and filtering**
    - **GET** `/api/products`
- **Get product by ID with category relation**
    - **GET** `/api/products/{id}`
- **Update a product**
    - **PATCH** `/api/products/{id}`
- **Delete a product**
    - **DELETE** `/api/products/{id}`

### Categories

- **Create a category**
    - **POST** `/api/categories`
- **Get all categories with pagination and filtering**
    - **GET** `/api/categories`
- **Get category by ID**
    - **GET** `/api/categories/{id}`
- **Update a category**
    - **PATCH** `/api/categories/{id}`
- **Delete a category**
    - **DELETE** `/api/categories/{id}`

## Swagger Documentation

- Explore and test the API endpoints using Swagger UI.
- Access the Swagger UI at `http://localhost:3000/docs`.

## Installation

#### 1. Clone this repository
#### 2. Navigate to the project directory
#### 3. Copy `.env.example` file with name `.env` and make sure all configs are correct
#### 4. Run `nvm install` if you have `NVM` if not make sure node version is v20
#### 5. Run `npm install` and install all dependencies 
#### 6. Run `npm run migration:run` for creating tables in database
#### 7. Run `npm run seed` for inserting initial db items
#### 8. Run `npm run start` or `npm run start:dev` and use it  ))
