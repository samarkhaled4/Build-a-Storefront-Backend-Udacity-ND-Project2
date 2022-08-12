import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config(); //load .env contents to process.env

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
    POSTGRES_DB_TEST
    //POSTGRES_PORT
} = process.env;

let Client;
console.log(ENV);

if(ENV==='test'){
    Client=new Pool({
        host:POSTGRES_HOST,
        database:POSTGRES_DB_TEST,
        user:POSTGRES_USER,
        password:POSTGRES_PASSWORD,
    })
}
if(ENV==='dev'){
    Client=new Pool({
        host:POSTGRES_HOST,
        database:POSTGRES_DB,
        user:POSTGRES_USER,
        password:POSTGRES_PASSWORD,
    })
}

export default Client;