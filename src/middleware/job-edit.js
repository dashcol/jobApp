
export function recruiterOnly(req, res, next) {
    if (req.session.userType !== 'recruiter') {
        return res.status(403).send('Access denied. Only recruiters can modify jobs.');
    }
    next();
}
