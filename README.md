# Blog Project

This is a simple blog project built with Node.js, Express, MongoDB, and Mongoose. It allows users to register, login, and create blog posts. The project demonstrates the usage of authentication, database integration, and basic CRUD operations.

## Features

- User registration and login
- Create, read blog posts
- Authentication using JSON Web Tokens (JWT)
- MongoDB integration with Mongoose
- Error handling and validation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-project.git](https://github.com/skursatToklucu/SimpleBlogPractice.git

2. Install the dependencies:

    ```bash
    cd blog-project
    npm install

 3. Configure environment variables:
     Create a .env file in the root directory and add the following:

         JWT_SECRET= your_jwt_secret
         MONGODB_USERNAME= <your_username>
         MONGODB_PASSWORD= <your_password
         MONGODB_URI=mongodb+srv://$MONGODB_USERNAME:$MONGODB_PASSWORD@blogcluster.yuyydji.mongodb.net/

  4. Start the server:

     ```bash
     npm start
  
   Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.
