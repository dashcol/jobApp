export default class jobData{
    constructor(no,cName,role,exp,pack,date,image,desc){
        this.no=no;
        this.cName=cName;
        this.role=role;
        this.exp=exp;
        this.pack=pack;
        this.date=date;
        this.image=image;
        this.desc=desc;
    }
    static jobsData(){
        return jobs;
    }

    static getByid(id){
        return jobs.find(p=>p.id==id);
    }
   
    
}

var jobs=[new jobData('1','ABC enterprise','SDE','2 years','12 LPA','2 days ago','https://dynamic.exportersindia.com/company_logo/4961058.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
    new jobData('2','oracle','junior developer','fresher','4 LPA','today','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4fZ8HDLR2KM5iEjJ3NEdyYiJ4PqDStSEuCs5GjqO_fqcG_Yj922bW1Lu-sbYBDV28fs&usqp=CAU.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
    new jobData('3','Google','intern','0-1 Years','10 LPA','1 week ago','https://media.wired.com/photos/65e83cc9b8ffa5f8fa84c893/16:9/w_2990,h_1682,c_limit/wired-uk-google-watching.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
];