import exp from "constants";
import {Order,OrderStore} from "../models/order"
import {User,UserStore} from "../models/user"

const order=new OrderStore();

const myOrder:Order={id:1,status:'active',user_id:1};
const user=new UserStore();

describe('Order model test',()=>{

    it('should have an index method',()=>{
        expect(order.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(order.index).toBeDefined();
    });
    it('should have a create method', () => {
        expect(order.index).toBeDefined();
    });
    
    it('should have a delete method', () => {
        expect(order.index).toBeDefined();
    });

    it('create method should add an order', async () => {
        await user.create({firstname:'mona',lastname:'khaled',password:'456'});
        const result = await order.create(myOrder);
        expect(result).toEqual(myOrder);
    });

    it('index method should return an array of orders',async()=>{
        const result=await order.index();
        expect(result).toEqual([myOrder]);
    });

    it('show method should return the correct order',async()=>{
        const result=await order.show("1");
        expect(result).toEqual(myOrder)
    });

    it('delete method should delete the order',async()=>{
        await order.delete("1");
        const result=await order.index();
        expect(result).toEqual([]);
    })
})