export default class JobController{
    editJob(req, res) {
        const jobId = req.params.id;
        const job = jobData.getByid(jobId);
    
        if (!job) {
            return res.status(404).send('Job not found');
        }
    
       
        res.render('edit-job', { job, errorMessage: null });
    }
    deleteJob(req, res) {
        const jobId = req.params.id;
        const jobIndex = jobData.findIndex(j => j.id === jobId);
    
        if (jobIndex === -1) {
            return res.status(404).send('Job not found');
        }
    
        jobData.splice(jobIndex, 1);
    
       
        res.redirect('/jobs');
    }
}