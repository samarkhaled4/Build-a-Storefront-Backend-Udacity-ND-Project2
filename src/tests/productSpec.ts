import {Product,ProductStore} from "../models/product"

const product=new ProductStore();

describe('Product model test',()=>{
  it('should have an index method', () => {
    expect(product.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(product.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(product.create).toBeDefined();
  });
  it('should have an update method', () => {
    expect(product.update).toBeDefined();
  });
  it('should have a delete method', () => {
    expect(product.delete).toBeDefined();
  });
  it('create method should add a product', async () => {
    const result = await product.create({
     id:1,
     pname:'skirt',
     price:50
    });
    expect(result).toEqual({
      id: 1,
      pname:'skirt',
      price:50
    });
  });
  it('index method should return an array of products',async()=>{
    const res=await product.index();
    expect(res).toEqual([{
        id: 1,
        pname:'skirt',
        price:50
      }]);
  });
  
  it('show method should return the correct product', async () => {
    const result = await product.show("1");
    expect(result).toEqual({
      id: 1,
      pname:'skirt',
      price:50
    });
  });

  it('update method should update product',async()=>{
    const myproduct=await product.show("1");
    const values={"price":30};
    const updated=await product.update(myproduct,values);
    expect(updated).toEqual({
      id:1,
      pname:'skirt',
      price:30
    })
  });

  it('delete method should remove the product', async () => {
    await product.delete("1");
    const result = await product.index()
    expect(result).toEqual([]);
  }) 
  
})