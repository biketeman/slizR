const env = process.env.NODE_ENV || 'development';
const config = require(`../config/${env}`)
const db = config.DB;
const bcrypt = require('bcrypt');

module.exports = function(req, res) {
    let username = req.body.username
    let password = req.body.password

    db('users').select ('username', 'password')
    .where({
        username: username
    }) 
    .then((row) => {
        console.log('')
        let auth = bcrypt.compareSync(password, row[0].password)

        return res.json({
            'status_code': 200,
            'message': 'Successfully logged in',
            'username': username,
            'input password': password,
            'bdd password': row[0].password,
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