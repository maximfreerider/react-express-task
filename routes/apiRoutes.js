const express = require("express");
const router = express.Router();
const db = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// router.get("/all", (req, res) => {
//     db.User.findAll()
//         .then(users => res.send({users}))
// });

router.get("/:id", (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(user => res.status(200).send(user))
});

router.post("/signup", (req, res) => {
    const {email, password, username, bio} = req.body;
    const hash = bcrypt.hash(password, 10, function (err, hash) {
        db.User.create({
            email, password: hash, username, bio
        })
            .then(submittedUser => res.status(201).json(submittedUser))
    })
});

router.post("/login", (req, res) => {
   const {email, password} = req.body
    db.User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            console.log(user.dataValues.id)
            const isMatch = bcrypt.compare(password, user.password)
            if(!isMatch) {
                return res.status(400)
            }
            const token = jwt.sign(
                {userId: user.id},
                'secretKey',
                {expiresIn: '900'} // 15 min 15*60 = 900 sec
            );
            res.status(200).send({token, userId: user.dataValues.id})
        })
});


module.exports = router;