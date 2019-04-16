const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;
const bcrypt = require('bcrypt');


module.exports = function(req, res) {
    let username = req.body.username
    let password = req.body.password

    db('users').select ('username', 'password')
    .where({
        'username': username
    })
    .then((row) => {
        let auth = bcrypt.compareSync(password, row[0].password)
        if(auth != true){
            return res.json({
                'status_code': 401,
                'message': 'Acess denied',
                'auth': auth
            }) 
        }
        return res.json({
            'status_code': 201,
            'message': 'Successfully logged in',
            'auth': auth
        })
    })
    .catch(function(err){

        return res.json({
            'status_code': 400,
            'error': err
        })

    })
}
