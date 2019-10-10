const express = require("express");
const router=express.Router();
const passport = require('passport');
const Profile = require('../../models/Profile');


router.post("/add",passport.authenticate("jwt",{session:false}),(req,res)=>{
	let profileObj=req.body;
	// console.log(profileObj);
	new Profile(profileObj).save((err,doc)=>{
		if(err){
			res.json(err);
			return;
		}
		res.json(doc);
	})
})

router.post("/edit",passport.authenticate("jwt",{session:false}),(req,res)=>{
	let profileObj=req.body;
	// console.log(profileObj);
	Profile.findOneAndUpdate(
		{_id:req.body.id},
		{$set:profileObj},
		{new:true},
		(err,profile)=>{
			if(err){
				res.json("错误"+err);
				return;
			}
			res.json(profile);
		}
	)
})

router.post("/delete",passport.authenticate("jwt",{session:false}),(req,res)=>{
	Profile.findOneAndRemove(
		{_id:req.body.id},
		(err,profile)=>{
			if(err){
				res.json("错误"+err);
				return;
			}
			if(profile){
				res.json(profile);
				profile.save(profile=>{
					res.json("删除成功");
				})
			}else{
				res.json("没有这个id");
			}
			
		}
	)
})

router.get("/",passport.authenticate("jwt",{session:false}),(req,res)=>{
	Profile.find((err,doc)=>{
		if(err){
			res.json("错误"+err);
			return;
		}
		res.json(doc);
	})
})

router.post("/one",passport.authenticate("jwt",{session:false}),(req,res)=>{
	Profile.findOne({_id:req.body.id},(err,doc)=>{
		// res.json(req.body.id);
		if(err){
			res.json("错误"+err);
			return;
		}
		res.json(doc);
	})
})



module.exports=router;
