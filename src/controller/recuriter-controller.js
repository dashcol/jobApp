import RecuriterModel from "../model/recuriter-model.js";
import jobData from "../model/model.js";
export default class RecuriterController{


    recuLogin(req,res){
        res.render('recu-login')
    }
    recuRegister(req,res){
        res.render('recu-register')
    }

    postRegister(req,res){
        console.log(req.body);
        const{name,email,password,companyName,JD}=req.body;
        const recuModel=new RecuriterModel();
    const recu=recuModel.addRecu(name,email,password,companyName,JD)
        res.render('recu-login')
    
    }
    postLogin(req,res){
        const {email,password}=req.body;
        const recuModel=new RecuriterModel();
       let recruiter= recuModel.loginVer(email,password);
        if (recruiter) {
            req.session.userEmail = email;
            req.session.userType = 'recruiter'; 
            let jobs = jobData.jobsData();
            return res.render('jobs', { jobs, userEmail: req.session.userEmail,userIsRecruiter: true });
        }
        res.render('recu-login', { errorMessage: 'Invalid credentials' });
    }
}