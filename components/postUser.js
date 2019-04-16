const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;
const bcrypt = require('bcrypt');
const hat = require('hat');


module.exports = function(req, res) {
		username = req.body.username
		password = req.body.password
		email = req.body.email,
		apikey = hat()
		apitoken = hat()
    	let salts = bcrypt.genSaltSync(10);
		let hashed_password = bcrypt.hashSync(password, salts);
		
		db('users').insert ({
			username: username,
			password: hashed_password,
			email: email,
			api_key: apikey,
			api_token: apitoken
		}) 
		.then((row) => {
			return res.json({
				'status_code': 201,
				'message': 'user successfully added',
				'username': username,
				'email' : email,
				'api_key': apikey,
				'api_token': apitoken,
			})
		})
		.catch(function(err){
			return res.json({
				'status_code': 400,
				'error': err
			})
		})
}
