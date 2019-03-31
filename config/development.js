module.exports =  {

	PORT: 8080,
	DB: require('knex') ({
		client: 'pg',
		connection: 'postgres://luugozkyvezpvc:27bde4abdc1dbf2ad53b046495a13b549401d651be2a4bd3ba186606e5167e3a@ec2-79-125-4-72.eu-west-1.compute.amazonaws.com:5432/doa420u3ve4ol?ssl=true',
	})
	
};
