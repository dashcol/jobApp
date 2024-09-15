import express from 'express';
import expressejslayouts from 'express-ejs-layouts';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';



import Jobcontroller from './src/controller/user-controller.js';
import Usercontroller from './src/controller/controller.js';
import { auth } from './src/middleware/auth.js';
import RecuriterController from './src/controller/recuriter-controller.js';
import { recruiterOnly } from './src/middleware/job-edit.js';
import JobController from './src/controller/job-controller.js';

const app =express();


app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','view'))
app.use(expressejslayouts);
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized: true,
    cookie:{secure:false},
}))
app.use(cookieParser());




const jobController=new Jobcontroller();
const userController=new Usercontroller();
const recuriterController=new RecuriterController();
const jobhandling= new JobController();

app.get('/',auth,userController.data)

app.get('/view/:no',auth,userController.viewData)

app.get('/login',jobController.getLogin)
 app.post('/login',jobController.postLogin)

app.get('/register',jobController.getRegister)
app.post('/register',jobController.postRegister)

app.get('/logout',jobController.logout)

app.get('/recuriter',recuriterController.recuLogin)
app.get('/recu-register',recuriterController.recuRegister)
app.post('/recuriter',recuriterController.postLogin)
app.post('/recu-register',recuriterController.postRegister)


app.post('/edit/:id', recruiterOnly, jobhandling.editJob);
app.post('/delete/:id', recruiterOnly, jobhandling.deleteJob);



app.listen(3100,()=>{
    console.log("Server Lsitening at 3100");
})