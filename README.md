# Build-a-Storefront-Backend-Udacity-ND-Project2
This is a simple storeFront Backend project to have products in a store and by adding user , the user can create orders and add products to these orders.
***
## Get Started
#### First : install and setup needed database variables
* you need to install postgresql or use docker instead of this.
  * You then need to edit these values in **.env** file with what you have when setup database.
     * PORT:3000 (which Node project built on), POSTGRES_HOST , POSTGRES_USER , POSTGRES_PASSWORD , POSTGRES_PORT:5432.
    and add these variables to **.env** file :
     * ENV , BCRYPT_PASSWORD , SALT_ROUNDS , TOKEN_SECRET.
  * You can then create a database which name in **.env** file with variable name of **POSTGRES_DB**.
  > Note : these are schema needed for this project :
    * products (id SERIAL PRIMARY KEY, pname VARCHAR(70), price FLOAT).
    * users (id SERIAL PRIMARY KEY,firstname VARCHAR(50),lastname VARCHAR(50),password VARCHAR(70)).
    * orders (id SERIAL PRIMARY KEY,status VARCHAR(50),user_id INTEGER REFERENCES users(id)).
    * order_products (id SERIAL PRIMARY KEY,order_id INTEGER REFERENCES orders(id),product_id INTEGER REFERENCES products(id),quantity INTEGER).

#### Second : setup node project
* You can start node project by cloning existing project here in this repo 
* Then you need to run `npm install` to get needed packages or if you will start from scratch you need to install following packages : 
  > write `npm i` before each one 
   * `bcrypt` , `body-parser` , `db-migrate` , `db-migrate-pg` , `dotenv` , `express` , `nodemon` , `pg`
  > you need also foolwing packaged but write `npm i --save-dev` before each one
   * `@types/bcrypt` , `@types/express` , `@types/jasmine` , `@types/jsonwebtoken` , `@types/node` , `@types/pg` , `cross-env` , `jasmine` , `jasmine-spec-reporter` ,         `jsonwebtoken` , `ts-node` , `tsc-watch` , `typescript`.
* You need also run `db-migrate up` to run migrations onto your database .
* To run the project you can write `npm run start`.

#### Third : you need tool like postman to connect to your app on address `http://localhost:3000`.
* You can do multiple things on postman to get and add data to the database as follows (end points in my application) :
 > Note: if mentioned that need auth you should send jwt that you received when creating the user in headers paameters
   * `get/users` >> get all users (need auth). 
   * `get/users/:id` >> get info about specific user (need auth).
   * `post/users` >> add a user (you will get jwt string in body of responce which you will need later to get or add products or orders).
   * `patch/users/:id`  >> edit info about specific user (need auth).
   * `delete/users/:id` >> delete a specific user (need auth).
   * `get/products` >> get all products.
   * `get/products/:id` >> get info about specific product.
   * `post/products` >> add a product (need auth).
   * `patch/products/:id`  >> edit info about specific product (need auth).
   * `delete/products/:id` >> delete a specific product (need auth).
   * `get/orders` >> get all orders by a user. 
   * `get/orders/:id` >> get info about specific order (need auth).
   * `post/orders` >> add an order (need auth).
   * `post/orders/:id/products` >> add products to specific order (need auth).
   * `delete/orders/:id` >> delete a specific order (need auth).
Finally you can test th project and make sure that all actions are well by run `npm run test`.
