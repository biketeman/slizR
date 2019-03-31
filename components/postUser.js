const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;

function randomPassowrd(){
	var randomstring = Math.random().toString(36).slice(-8);
	return randomstring
}
module.exports = function(req, res) {
	db('users').insert({
		username: req.body.username,
		password: randomPassowrd(),
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
