import exp from "constants";
import {Order,OrderStore} from "../models/order"
import { Product,ProductStore } from "../models/product";
import {User,UserStore} from "../models/user"

const order=new OrderStore();
const myOrder:Order={id:1,status:'active',user_id:1};
const user=new UserStore();
const product=new ProductStore();

describe('Order model test',()=>{

    it('should have an index method',()=>{
        expect(order.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(order.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(order.create).toBeDefined();
    });
    
    it('should have a delete method', () => {
        expect(order.delete).toBeDefined();
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

    it('addProduct method should add product to the order',async()=>{
        await product.create({pname:'t-shirt',price:50});
        const result=await order.addProduct(2,'1','1');
        expect(result).toEqual({
            id:1,
            order_id:1,
            product_id:1,
            quantity:2
        })
    });

    it('delete method should delete the order',async()=>{
        await order.delete("1");
        const result=await order.index();
        expect(result).toEqual([]);
    })
})