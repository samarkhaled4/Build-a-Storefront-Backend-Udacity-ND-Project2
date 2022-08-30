import {User,UserStore} from "../models/user"
import bcrypt from "bcrypt";

const user=new UserStore();

const myUser:User={id:5,firstname:'samar',lastname:'khaled',password:'123'}

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
            id:5,
            firstname:'samar',
            lastname:'khaled',
            password:result.password
        });
    });
    it('index method should return an array of users',async()=>{
        const result=await user.index();
        expect(result).not.toEqual([]);
    });
      
    it('show method should return the correct user', async () => {
        const result = await user.show("5");
        expect(result).toEqual({
          id:5,
          firstname:'samar',
          lastname:'khaled',
          password:result.password
        });
    });
    
    it('update method should update user',async()=>{
        const myusr=await user.show("5");
        const values={"lastname":'kasem'};
        const updated=await user.update(myusr,values);
        expect(updated).toEqual({
            id:5,
            firstname:'samar',
            lastname:'kasem',
            password:myusr.password
        })
    });
    
    it('delete method should remove the user', async () => {
        const myusr=await user.show("5");
        await user.delete("5");
        const result = await user.index()
        expect(result).not.toContain(myusr);
    }) 
})
