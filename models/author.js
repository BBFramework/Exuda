// File: ../models/Author.js
const Mongoose = require( 'mongoose' ); 			// Import mongoose package.
const Schema = Mongoose.Schema;						// Get mongoose schema interface.

// Defines author model schema.
const AuthorSchema = new Schema({
	first_name: {type: String, required: true, max: 100}, 
	family_name: {type: String, required: true, max: 100}, 
	date_of_birth: {type: Date}, 
	date_of_death: {type: Date}, 
}); 

// Defines virtual for name.
AuthorSchema.virtual('name').get(function() 
{
	return this.first_name + ' ' + this.last_name; 
}); 

// Defines virtual for lifespan.
AuthorSchema.virtual('lifespan').get(function() 
{
	return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString(); 
}); 

// Defines virtual for url.
AuthorSchema.virtual('url').get(function() 
{
	return '/catalog/author/' + this._id; 
}); 

// Exports module to model.
module.exports = Mongoose.model('Author', AuthorSchema); 
