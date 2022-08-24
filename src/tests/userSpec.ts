import {User,UserStore} from "../models/user"
import bcrypt from "bcrypt";

const user=new UserStore();

const myUser:User={firstname:'samar',lastname:'khaled',password:'123'}

describe ("User Model Test",()=>{
    it('should have an index method',()=>{
        expect(user.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(user.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(user.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(user.update).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(user.delete).toBeDefined();
    });

    it('create method should add a user', async () => {
        const result = await user.create(myUser);
        expect(result).toEqual({
            id:2,
            firstname:'samar',
            lastname:'khaled',
            password:result.password
        });
    });
    it('index method should return an array of users',async()=>{
        const result=await user.index();
        expect(result).toEqual([
            {id:1,
            firstname:'mona',
            lastname:'khaled',
            password:result[0].password}
            ,{id:2,
            firstname:'samar',
            lastname:'khaled',
            password:result[1].password
          }]);
    });
      
    it('show method should return the correct user', async () => {
        const result = await user.show("2");
        expect(result).toEqual({
          id:2,
          firstname:'samar',
          lastname:'khaled',
          password:result.password
        });
    });
    
    it('update method should update user',async()=>{
        const myproduct=await user.show("2");
        const values={"lastname":'kasem'};
        const updated=await user.update(myproduct,values);
        expect(updated).toEqual({
            id:2,
            firstname:'samar',
            lastname:'kasem',
            password:myproduct.password
        })
    });
    
    it('delete method should remove the user', async () => {
        await user.delete("2");
        await user.delete("1");
        const result = await user.index()
        expect(result).toEqual([]);
    }) 
})
