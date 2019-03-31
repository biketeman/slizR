const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;


module.exports = function(req, res) {

	db('users')
		.where({
			id : req.params.id
		})
		.del()
		.then(function (rows) {
			return res.json({
				'status_code': 200,
				'errors': [],
				'data': rows
			})				
		})
		.catch(function (err) {
			return res.json({
				'status_code': 403,
				'errors': ['unable to get all users'],
				'data': null
			})
		})
}