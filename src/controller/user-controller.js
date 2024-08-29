import userData from "../model/user-model.js";
import jobData from "../model/model.js";

export default class Jobcontroller{
    getLogin(req,res){
        res.render('login',{errorMessage:null})
    }
    getRegister(req,res){
        res.render('register',{errorMessage:null})
    }

    postLogin(req,res){
        const {email,password}=req.body;
       const user=userData.validateUser(email,password);
       if(!user){
        return res.render('login',{errorMessage:'Invalid Credentials'})
       }
       req.session.userEmail=email;
       var jobs=jobData.jobsData();
       res.render('jobs',{jobs,userEmail:req.session.userEmail});
    }


    postRegister(req,res){
            const{name,email,password}=req.body;
            userData.addUser(name,email,password);
            res.render('login',{errorMessage:null})
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect('/login')
            }
        });
    }
}