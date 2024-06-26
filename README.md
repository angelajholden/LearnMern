# Fiber &amp; Kraft

This project is a backend application built with Express.js and MongoDB. It provides REST API endpoints for user authentication and product management.

## Getting Started

These instructions will guide you through setting up the project on your local development machine.

### Prerequisites

-   Node.js
-   MongoDB
-   npm

### Installing

1. Clone the repository:
    ```bash
    git clone git@github.com:angelajholden/fiberandkraftDB.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and set your environment variables:

    ```plaintext
    DB_URI=mongodb://localhost:27017/your-database
    JWT_SECRET=your-secret-key
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### User Endpoints

-   **POST /api/users/login**: Authenticates a user and returns a token.

    -   Body: `{ "email": "user@example.com", "password": "password123" }`

-   **POST /api/users**: Registers a new user.

    -   Body: `{ "name": "John Doe", "email": "user@example.com", "password": "password123" }`

-   **GET /api/users/me**: Retrieves user details based on the provided token.

### Product Endpoints

-   **GET /api/products**: Returns all products, sorted alphabetically by name.
-   **GET /api/products/endPoint/:endPoint**: Fetches a single product by its endPoint.
-   **POST /api/products**: Adds a new product to the database.
    -   Body: `{ "name": "New Product" }`
-   **PUT /api/products/:id**: Updates the details of an existing product.
    -   Body: `{ "name": "Updated Product", "description": "Updated Description", "price": 29.99 }`
-   **DELETE /api/products/:id**: Deletes a product based on its ID.

## Running Tests

Explain how to run the automated tests for this system (if applicable):

```bash
npm test
```

## Deployment

Add additional notes about how to deploy this on a live system.

## Contributing

Please read [CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-repository/tags).

## Authors

-   **Angela J. Holden**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## userController.js

This `userController.js` file in an Express.js project is part of the backend logic handling user-related operations such as registration, login, and fetching user data. Here’s a breakdown of each section and its purpose:

### Dependencies and Models

-   `jsonwebtoken`: This package is used to create JSON Web Tokens (JWT) which are used for securely transmitting information between parties as a JSON object. In this context, it’s used to handle user authentication.
-   `bcryptjs`: Used for hashing and checking passwords securely. Hashing passwords before storing them in your database is crucial for security.
-   `express-async-handler`: A utility to handle exceptions inside of async express routes and pass them to your express error handlers.
-   `User`: The User model imported from `../models/userModel` is likely a Mongoose model that defines the schema for the user data in the MongoDB database.

### Controllers

#### loginUser

-   **Endpoint**: `POST /api/users/login`
-   **Access**: Public
-   **Functionality**: This function authenticates a user. It retrieves the email and password from `req.body`, checks if a user with that email exists, and then verifies the password using `bcrypt.compare()`. If authentication is successful, it sends back the user details along with a JWT token generated by `generateToken()`. If either the user is not found or the password does not match, it responds with a 401 status code and an "Invalid credentials" error.

#### registerUser

-   **Endpoint**: `POST /api/users`
-   **Access**: Public
-   **Functionality**: This function handles new user registration. It checks if all required fields are provided and whether a user with the same email already exists. If the user exists, it responds with a 400 status and an error message. If the input data is valid, it hashes the password using `bcrypt`, creates a new user in the database, and returns the user info along with a JWT token.

#### getMe

-   **Endpoint**: `GET /api/users/me`
-   **Access**: Public
-   **Functionality**: This is a placeholder for a function that should return user-specific data. Typically, you'd authenticate the user first and use their token to fetch their details. However, the implementation here is incomplete and only returns a static message. Normally, you would extract the user ID from the JWT token, find the user in the database, and return their details.

### Utility Functions

#### generateToken

-   **Functionality**: This function takes a user ID and generates a JWT token using the `jwt.sign()` method. The token includes the user's ID in its payload, uses an environment variable `JWT_SECRET` for the secret key, and sets an expiration of 30 days.

### Summary

The module exports the `registerUser`, `loginUser`, and `getMe` functions which can be used in Express routes to handle respective user operations. The file handles core user management tasks like registration, login, and user information retrieval, which are fundamental for any application with user authentication and authorization.
