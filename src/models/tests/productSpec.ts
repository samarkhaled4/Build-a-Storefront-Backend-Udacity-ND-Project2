import {Product,ProductStore} from "../product"

const product=new ProductStore();

describe('Product model test',()=>{
    it('have index method',()=>{
        expect(product.index).toBeDefined();
    });
    it('return an array of products',async()=>{
        const res=await product.index();
        expect(res).toEqual([]);
    })
})