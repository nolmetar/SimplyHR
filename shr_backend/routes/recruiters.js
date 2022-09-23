var express = require('express');
var router = express.Router();

const recruiterCtrl = require('../controllers/recruiter')

router.post('/signup', recruiterCtrl.signup)
router.post('/login', recruiterCtrl.login)

module.exports = router;
