const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)

const db = config.DB;

module.exports = function(req, res) {

 	db('users')
 	.update({
 		'username': req.body.username,
 		'email': req.body.email,
        'paswword': req.body.password
 	})
 	.where({
 		'id': req.params.id,
	})
 	.then(function (row) {
 		return res.json({
 			"status_code": 200,
 			"errors": [],
 			"message": "your new informations have been saved",
 			"data": req.body
 		})
 	})
 	.catch(function (err) {	
 		return res.json({
 			"status_code": 401,
 			"errors": 'unable to update your personnal informations',
 			"error": err
 		})
 	})
}