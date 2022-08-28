# Build-a-Storefront-Backend-Udacity-ND-Project2
This is a simple storeFront Backend project to have products in a store and by adding user , the user can create orders and add products to these orders.
***
## Get Started
#### First : install and setup needed database variables
* you need to install postgresql or use docker instead of this.
  * You can then create a database which name in **.env** file with variable name of **POSTGRES_DB**.
     * First open sql terminal
     * then, You need to create user and password if don't make during installation as follows :
        * `CREATE USER postgres WITH PASSWORD '123'`.
     * You can add full privileges to your user by :
        * `GRANT ALL PRIVILEGES ON DATABASE strorefront TO USER postgres`.
        * `GRANT ALL PRIVILEGES ON DATABASE strorefront_test TO USER postgres`.
     * finally cration and connecting to our database :
        * `CREATE DATABASE storefront;` 
        * and to connect to te database `\c strorefront`
      
#### Second : setup node project
* You can start node project by cloning existing project here in this repo.
* You then need to add file  **.env** file to your project with following variables related to database we created :
   * PORT:3000 (which Node project built on), POSTGRES_HOST(localhost) , POSTGRES_USER(postgres) , POSTGRES_PASSWORD(123) , POSTGRES_PORT:5432.
   - also you need to add these variables but with values that you want :
   * ENV(dev or test regarding to your perpose to develop or test) , BCRYPT_PASSWORD , SALT_ROUNDS , TOKEN_SECRET. 
* Then you need to run `npm install` to get needed packages or if you will start from scratch you need to install following packages : 
  > write `npm i` before each one 
   * `bcrypt` , `body-parser` , `db-migrate` , `db-migrate-pg` , `dotenv` , `express` , `nodemon` , `pg`
  > you need also foolwing packaged but write `npm i --save-dev` before each one
   * `@types/bcrypt` , `@types/express` , `@types/jasmine` , `@types/jsonwebtoken` , `@types/node` , `@types/pg` , `cross-env` , `jasmine` , `jasmine-spec-reporter` ,         `jsonwebtoken` , `ts-node` , `tsc-watch` , `typescript`.
* You need also run `db-migrate up` to run migrations onto your database .
* To run the project you can write `npm run start`.

#### Third : you need tool like postman to connect to your app on address `http://localhost:3000`.
* You can do multiple things on postman to get and add data to the database.

**Finally** you can test th project and make sure that all actions are well by run `npm run test`.
