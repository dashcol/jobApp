export default class userData{

    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;

    }
    static getUer(){
       return user;
    }
    static addUser(name,email,password){
        const newUser=new userData(name,email,password);
        user.push(newUser);
    }

    static validateUser(email,password){
        const result=user.find(f=>f.email==email && f.password==password);
        return result;

    }


}

var user=[];