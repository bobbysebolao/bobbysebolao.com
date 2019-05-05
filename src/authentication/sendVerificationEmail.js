const nodemailer = require('nodemailer');

require("env2")("./config.env");

let GMAIL_ADDRESS = process.env.GMAIL_ADDRESS;
let GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

async function sendVerificationEmail(recipientName, recipientEmail, recipientUsername, token) {
  console.log("HOOOHAAA", recipientName, recipientEmail, token);

    let mailConfig;
    let confirmationLink;
    let testAccount = await nodemailer.createTestAccount();

    if (process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'live' && process.env.NODE_ENV !== 'build_db') {
      console.log("Sending real verification email...")
      confirmationLink = `https://rocky-plains-29996.herokuapp.com/blog/confirm-email?evt=${token}&username=${recipientUsername}`
    mailConfig = {
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: GMAIL_ADDRESS, // real account details
        pass: GMAIL_PASSWORD // real password
      }
    }
  }

  else {
    console.log("Sending test verification email...")
    confirmationLink = `http://localhost:9000/blog/confirm-email?evt=${token}&username=${recipientUsername}`
    mailConfig = {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    }
  }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(mailConfig);

    let mailOptions = {
      from: '"Bobby Sebolao" <bobbysebolao@gmail.com>"', //sender address
      to: `${recipientEmail}`, //list of receivers
      subject: "Console - Verify Email Address ✔", //subject linkedin
      text: `Hi ${recipientName},
      To verify this email address is yours, please copy and paste this link into your browser: ${confirmationLink}`, //plain text Body
      html: `<p>Hi ${recipientName},</p>
      <p>To verify this email address is yours, please click this link: <a href="${confirmationLink}">Confirm email</a></p>
      <p>Bee well,</p>
      <p>Bobby 🐝</p>` //html body
    };

    // send email with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendVerificationEmail;
