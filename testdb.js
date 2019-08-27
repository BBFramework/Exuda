// const async = require( 'async' ); 
const mongoose = require( 'mongoose' ); 
const mongodb = 'mongodb://centos:root@localhost:27017/mydb?authSource=admin';
mongoose.connect(mongodb, { useNewUrlParser: true }); 
// mongoose.Promise = global.Promise; 
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once( 'open', () => 
{
	console.log("Successful connect.");
	
	const AnimalSchema = new mongoose.Schema({ name: String, type: String });
	const Animal = mongoose.model( 'Animal', AnimalSchema );
	var animal = new Animal( {name: 'cuong', type: 'man'} );
	animal.save((err)=>
	{
		if(err) 
		{
			console.log(err); 
		} 
		else 
		{
			console.log("New animal: "+animal);
		}
	});
})