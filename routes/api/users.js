const express = require("express");
const router=express.Router();
const User = require('../../models/user');
const bcrypt=require("bcrypt");
const gravatar=require("gravatar");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys= require("../../config/key");

router.post('/register',(req,res)=>{
	User.find({'email':req.body.email},(err, result)=>{
		if(err){
			res.status(400).json("错误"+err);
			return;
		}else if(result.length!==0){
			res.status(400).json("重复"+result);
			return;
		}else{
			let avatar = gravatar.url(req.body.email,{s:200,r:'pg',d:'mm'})
			const newUser = new User({
				name:req.body.name,
				password:req.body.password,
				email:req.body.email,
				avatar,
				identity:req.body.identity,
			});
			bcrypt.genSalt(10,(err,salt)=>{
				bcrypt.hash(newUser.password,salt,(err,hash)=>{
					if(err){
						res.status(400).json("错误"+err);
						return;
					}else{
						// console.log(hash);
						newUser.password=hash;
						newUser.save(newUser,(err,doc)=>{
							if(err){
								res.status(400).json("错误"+err);
								return;
							}
							res.json(doc);
						});
					}
				})
			})
		}
	})	
})

router.post("/login",(req,res)=>{
	const email=req.body.email;
	const password = req.body.password;
	User.findOne({email},(err,user)=>{
		if(!user){
			return res.status(404).json("用户不存在");
		}
		bcrypt.compare(password,user.password,(err,isMatch)=>{
			if(isMatch){
				const rule = {
					id:user.id,
					name:user.name,
					identity:user.identity,
					avatar:user.avatar
				};
				jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
					if(err){
						return res.json(err);
					}
					res.json({token:"Bearer " + token});
				})
			}else{
				return res.status(400).json('密码不对')
			}
		})
	})
})

router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
	res.json({
		id:req.user.id,
		name:req.user.name,
		email:req.user.email,
		identity:req.user.identity,
	});
})

module.exports=router;

