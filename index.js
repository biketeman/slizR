const express = require('express');
const _ = require('lodash');
const parser = require('body-parser');


const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}`)


const app = express();
app.use(parser.json());

const services = {
  users: {
    postUser: require('./components/postUser'),
    getUser: require('./components/getUser'),
    getAllUsers: require('./components/getAllUsers'),
    updateUser: require('./components/updateUser'),
    deleteUser: require('./components/deleteUser'),
    checkLogin: require('./components/checklogin')
  }
}
app.post('/user', services.users.postUser);
app.get('/user/:id', services.users.getUser);
app.get('/allusers/', services.users.getAllUsers);
app.post('/updateUser/:id', services.users.updateUser);
app.delete('/deleteUser/:id', services.users.deleteUser)
app.post('/login', services.users.checkLogin)



app.listen(config.PORT, function () {
  console.log(`Listening on port ${config.PORT}`);
});
