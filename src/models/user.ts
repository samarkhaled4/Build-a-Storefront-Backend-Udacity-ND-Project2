import Client from "../database";
import bcrypt from "bcrypt";
export type User ={
    id?:number,
    firstname:string,
    lastname:string,
    password:string
}
export class UserStore {
    async index():Promise<User[]>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM users';
            const result=await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error (`cannot get users ${err}`)
        }
    }
    async show(id:number):Promise<User>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM users WHERE id=($1)';
            const result=await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot get user ${err}`)
        }
    }
    async create(u:User):Promise<User>{
        try{
            const conn=await Client.connect();
            const sql='INSERT INTO users (firstname,lastname,password) VALUES ($1,$2,$3) RETURNING *';
            //hash password before saving in database
            const {SALT_ROUNDS,BCRYPT_PASSWORD}=process.env
            const pepper=BCRYPT_PASSWORD;
            const saltRounds=SALT_ROUNDS as string;
            const hash=bcrypt.hashSync(u.password+pepper,parseInt(saltRounds))
            const result=await conn.query(sql,[u.firstname,u.lastname,hash]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot create user ${err}`)
        }
    }
}