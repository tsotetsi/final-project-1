const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')
const Patient = require('../models/Patients');

//route api/auth  method:GET - loads/ gets a logged patient information

router.get('/', auth, 
async (req, res) => { 

   try {
       const patient = await Patient.findById(req.patient.id).select('-identityNo');
       res.json(patient);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server error')
   }    
});

//route api/auth method: POST  login
router.post('/',
[
    check('name','Please enter a valid full name'),
    check('identityNo','Please enter a valid identity number').exists().isLength({min:13})
], 
async (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }

    const { name, identityNo } = req.body;

    try {
        let patient = await Patient.findOne({ name });

        if(!patient){
            return res.status(400).json({msg:'invalid credentials'});
        }

        const isMatch = bcrypt.compare(identityNo, patient.identityNo);

        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }
        const payload = {
            patient: {
                id: patient.id
            }
        }

        jwt.sign( payload, config.get('jwtSecret'),{
            expiresIn:360000
        }, 
        (err, token) => {
            if(err) throw err;
            res.json({ token })
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});

module.exports = router;