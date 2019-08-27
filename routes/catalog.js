// File: ../routes/catalog.js

const express = require( 'express' ); 		// Import express package.
const router = express.Router();			// Get the router interface object.

// Import the controllers.
const AuthorController = require( '../controllers/authorController' );

router.get( '/', AuthorController.list);

// Exports router object to use.
module.exports = router;
