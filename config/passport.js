const 
	JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt;
	
const mongoose = require('mongoose');
const User = mongoose.model("users");
const keys= require("./key");


const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;




module.exports=passport =>{
	passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
		// console.log(jwt_payload.id);
		User.findById(jwt_payload.id,(err,user)=>{
			if(err){
				console.log(err);
				return;
			}else if(user){
				return done(null,user);
			}else{
				return done(null,false);
			}
		})
	}));
};