import jobData from "../model/model.js";
export default class Usercontroller{


    data(req,res){
        let jobs=jobData.jobsData();
res.render('jobs',{jobs,userEmail:req.session.userEmail})
    }

    viewData(req,res){
        const id=req.params.id;
        const found=jobData.getByid(id)
        if(found){
          res.render('job-details',{jobs:found,errorMessage:null,userEmail:req.session.userEmail})
        }
        else{
          res.status(401).send('job not found');
        }
    }



}