import jobData from "../model/model.js";
export default class Usercontroller{


  data(req, res) {
    const jobs = jobData.jobsData();
    const userIsRecruiter = req.session.userType == 'recruiter';  
    res.render('jobs', { jobs, userEmail: req.session.userEmail, userIsRecruiter });
}


    viewData(req,res){
        const id=req.params.id;
        const found=jobData.getByid(id)
        const userIsRecruiter = req.session.userType == 'recruiter'; 
        if(found){
          res.render('job-details',{jobs:found,errorMessage:null,userEmail:req.session.userEmail,userIsRecruiter })
        }
        else{
          res.status(401).send('job not found');
        }
    }



}