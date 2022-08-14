import Client from "../database";

export type Product ={
    id?:number,
    pname:string,
    price:number
}
export class ProductStore {
    async index():Promise<Product[]>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM products';
            const result=await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error (`cannot get products ${err}`)
        }
    }
    async show(id:number):Promise<Product>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM products WHERE id=($1)';
            const result=await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot get product ${err}`)
        }
    }
    async create(p:Product):Promise<Product>{
        try{
            console.log(p)
            const conn=await Client.connect();
            const sql='INSERT INTO products (pname,price) VALUES ($1,$2) RETURNING *';
            const result=await conn.query(sql,[p.pname,p.price]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot create product ${err}`)
        }
    }
}