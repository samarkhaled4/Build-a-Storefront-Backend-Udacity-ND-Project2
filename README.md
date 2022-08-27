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
* You can do multiple things on postman to get and add data to the database.

**Finally** you can test th project and make sure that all actions are well by run `npm run test`.
