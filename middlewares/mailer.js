/**
 *============================================================================
 * Welcome to Exuda Cms, A Nodejs-Expressjs content management system. 
 * It's trying instance new a web enviroment that use create some wonderful 
 * applications.
 *
 * Owner: Bapquad Games. 
 * Author: Cuong.H.Vu 
 * Copyright (c) 2019. Bapquad Games. 
 *
 * File: ./middlewares/mailer.js
 *============================================================================
 */
const nodeMailer = require('nodemailer'); 			// Import the Node Mailer package. 
const credential = require('../configs/credentials').mailer;

/**
 * Apply the node mailer module to application. This is used to send
 * a mail.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Create reusable transporter object using the default SMTP transport.
	 */
	res.locals.mailer = mailer = nodeMailer.createTransport(
	{
		host: 'smtp.gmail.com', 
		port: 587, 
		secure: false, 			// true for 465 port, false for other port.
		auth: {
			user: credential.username, 
			pass: credential.password
		}
	}); 
	
	/**
	 * Defines a default mail sender.
	 */
	res.locals.mailerAgency = '"Exudo:Server" <webmaster@exuda.com>';
	
	// Create sendmail.
	// let info = await mailer.sendMail(
	// {
		// from: '"Cuong Ga" <vuhuycuong@exuda.com>', 
		// to: "vuhuycuong291987@gmail.com", 		// Repicients
		// subject: "Test Node Mailer", 
		// text: "This is the mail test with NodeMailer", 
		// html: "<p>This is the mail test with <b>NodeMailer</b></p>",
	// }); 
	
	// Show sent message id.
	// console.log("Message sent: %s", info.messageId); 
	
	// Show send messgae url.
	// console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info)); 
	
	next(); 
};