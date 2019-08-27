// File: ../models/BookInstance.js
const Mongoose = require( 'mongoose' ); 			// Import mongoose package. 
const Schema = Mongoose.Schema;						// Get mongoose schema interface. 

// Defines book instance model schema.
const BookInstanceSchema = new Schema({
	book: {type: Schema.Types.ObjectId, ref: 'Book', required: true}, 
	imprint: {type: String, required: true}, 
	status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'}, 
	due_back: {type: Date, default: Date.now}, 
}); 

// Virtual for book instance url.
BookInstanceSchema.virtual('url').get(function() 
{
	return '/catalog/bookInstance/' + this._id; 
}); 

// Exports module to model.
module.exports = Mongoose.model('BookInstance', BookInstanceSchema); 