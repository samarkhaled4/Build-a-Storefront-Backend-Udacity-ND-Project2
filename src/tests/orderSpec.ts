import {Order,OrderStore} from "../models/order"
//const {Order,OrderStore}=require('../models/order');
const order=new OrderStore();

describe('Order model test',()=>{
    it('have index method',()=>{
        expect(order.index).toBeDefined();
    });
    it('return an array of products',async()=>{
        const res=await order.index();
        expect(res).toEqual([]);
    })
})