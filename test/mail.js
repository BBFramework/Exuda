// mail.js

const nodeMailer = require('nodemailer'); 

main = async () => 
{
	// Create a test mail account.
	const testMail = await nodeMailer.createTestAccount(); 
	
	// Create reusable transporter object using the default SMTP transport.
	let transporter = nodeMailer.createTransport(
	{
		host: 'smtp.gmail.com', 
		port: 587, 
		secure: false, // true for 465 port, false for other port.
		auth: {
			user: 'vuhuycuongtest@gmail.com', 
			pass: '!234!qaz'
		}
	}); 
	
	// Create sendmail.
	let info = await transporter.sendMail(
	{
		from: '"Cuong Ga" <vuhuycuong@exuda.com>', 
		to: "vuhuycuong291987@gmail.com", 
		subject: "Test Node Mailer", 
		text: "This is the mail test with NodeMailer", 
		html: "<p>This is the mail test with <b>NodeMailer</b></p>",
	}); 
	
	// Show sent message id.
	console.log("Message sent: %s", info.messageId); 
	
	// Show send messgae url.
	console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info)); 
}

main().catch(console.error);