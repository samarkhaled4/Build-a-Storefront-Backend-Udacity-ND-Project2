import Client from "../database";

export type Order ={
    id:number,
    status:string,
    user_id:number,
    product_id:number,
    product_quantity:number
}
export class OrderStore {
    async show(id:number):Promise<Order>{
        try{
            const conn=await Client.connect();
            const sql="SELECT * FROM orders WHERE user_id=($1)";
            const result=await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error (`cannot get order ${err}`)
        }
    }
}