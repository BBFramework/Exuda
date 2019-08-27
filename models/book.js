// File: ../models/Book.js
const Mongoose = require( 'mongoose' );				// Import mongoose package. 
const Schema = Mongoose.Schema;						// Get mongoose schema interface. 

// Defines author model schema. 
const BookSchema = new Schema({
	title: {type: String, required: true}, 
	author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, 
	summary: {type: String, required: true}, 
	isbn: {type: String, required: true}, 
	genre: {type: Schema.Types.ObjectId, ref: 'Genre', required: true} 
}); 

// Defines genre model schema. 
BookSchema.virtual('url').get(function() 
{
	return '/catalog/book/' + this._id; 
}); 

// Exports the module to model. 
module.exports = Mongoose.model('Book', BookSchema); 