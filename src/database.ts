import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config(); //load .env contents to process.env

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    //POSTGRES_PORT
} = process.env;

const Client=new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD,
    //port:POSTGRES_PORT
})
//console.log(`${Pool}`)

export default Client;