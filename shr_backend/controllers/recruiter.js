const bcrypt = require('bcrypt')

const Recruiter = require('../models/Recruiter')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const recruiter = new Recruiter({
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: hash
            });
            recruiter.save({"w": 1})
                .then(() => console.log(res.body))
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Recruiter.findOne({ email: req.body.email })
        .then(recruiter => {
            if(!recruiter){
                return res.status(401).json({ error: error })
            }
            bcrypt.compare(req.body.password, recruiter.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({ error: "mdp incorrect"});
                    }
                    res.status(200).json({
                        userId: user._id
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
};