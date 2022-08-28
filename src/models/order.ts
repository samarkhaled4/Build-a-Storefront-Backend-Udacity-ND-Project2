import Client from "../database";

export type Order ={
    id?:number,
    status:string,
    user_id:number,
}
export class OrderStore {
    async index():Promise<Order[]>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM orders';
            const result=await  conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error (`can;t index orders ${err}`)
        }
    }
    async show(id:string):Promise<Order>{
        try{
            const conn=await Client.connect();
            const sql='SELECT * FROM orders WHERE id=($1)';
            const result=await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot get order ${err}`)
        }
    }
    async create(o:Order):Promise<Order>{
        try{
            const conn=await Client.connect();
            const sql='INSERT INTO orders (status,user_id) VALUES ($1,$2) RETURNING *';
            const result = await conn.query(sql,[o.status,o.user_id]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cann't create order ${err}`)
        }
    }
    async addProduct(quantity:number,productId:string,orderId:string){
        try{
            const conn=await Client.connect();
            const sql='INSERT INTO order_products (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *';
            const result=await conn.query(sql,[orderId,productId,quantity]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cann't add Product ${productId} to order ${orderId} .Error ${err}`)
        }
    }
    async delete(id:string){
        try{
            const conn=await Client.connect();
            await conn.query('DELETE FROM order_products WHERE order_id=($1)',[id]);
            const sql='DELETE FROM orders WHERE id=($1)';
            const result=await conn.query(sql,[id]);
            conn.release();
            return (result).rows[0];
        }
        catch(err){
            throw new Error (`cann't delete order ${id} .Error ${err}`)
        }
    }
}