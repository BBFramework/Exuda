// File: ../models/Genre.js
const Mongoose = require( 'mongoose' );				// Import the mongoose package.
const Schema = Mongoose.Schema;						// Get the mongo schema interface.

// Defines the genre schema. 
const GenreSchema = new Schema({
	name: {type: String, required: true, min: 3, max: 100}, 
}); 

// Defines the virtual for url. 
GenreSchema.virtual('url').get(function() 
{
	return '/catalog/genre/' + this._id; 
}); 

// Exports module to model.
module.exports = Mongoose.model('Genre', GenreSchema);