const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user')
const config = require('config')
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{const{name,email,password}=req.body;
// res.send('register')

   
    if(!name|| !email || !password){
        return res.status(400).json({msg: 'please enter all fields'})
    }
    User.findOne({email})
    .then(user=>{
        if(user) return res.status(400).json({msg:'user already exist'})
        const newUser= new User({
            name,
            email,
            password
        });
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user =>{
                        jwt.sign({
                            id: user.id
                        },
                        config.get('jwtSecret'),
                        {expiresIn:3600},
                        (err, token)=>{
                            if(err) throw err;
                            res.json({
                                token,
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email  
                                }
                            }) 
                        })
                       
                    })

            })
        })
    })
})

module.exports =router; 