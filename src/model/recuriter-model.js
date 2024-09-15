export default class RecuriterModel{
constructor(name,email,password,companyName,JD){
this.name=name;
this.email=email;
this.password=password;
this.companyName=companyName;
this.JD=JD;
}
getRecu(){
return recu;

}
addRecu(name,email,password,companyName,JD){
const newRecu=new RecuriterModel(name,email,password,companyName,JD);
recu.push(newRecu);
}
loginVer(email,password){
    const result=recu.find(f=>f.email==email && f.password==password);
    return result;
}
}

var recu=[];