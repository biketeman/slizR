const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;
const bcrypt = require('bcrypt');

module.exports = function(req, res) {

		password = req.body.password
    let salts = bcrypt.genSaltSync(10);
		let hashed_password = bcrypt.hashSync(password, salts);
		
		db('users').insert ({
			username: req.body.username,
			password: hashed_password,
			email: req.body.email,
		}) 
		.then((row) => {
			return res.json({
				'status_code': 201,
				'message': 'user successfully added'
			})
		})
		.catch(function(err){
			return res.json({
				'status_code': 400,
				'error': err
			})
		})
}
