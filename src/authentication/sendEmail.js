import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

let GMAIL_ADDRESS = process.env.GMAIL_ADDRESS;
let GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

export const sendEmail = async (recipientData, token) => {

  let mailConfig;
  let confirmationLink;
  let testAccount = await nodemailer.createTestAccount();

  if (
    process.env.NODE_ENV !== "local" &&
    process.env.NODE_ENV !== "test" &&
    process.env.NODE_ENV !== "live" &&
    process.env.NODE_ENV !== "build_db"
  ) {
    console.info("Sending real email...");
    if (token) {
      confirmationLink = `https://bobbysebolao.com/blog/confirm-email?evt=${token}&username=${
        recipientData.username
      }`;
    }
    mailConfig = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: GMAIL_ADDRESS, // real account details
        pass: GMAIL_PASSWORD // real password
      }
    };
  } else {
    console.info("Sending test email...");
    if (token) {
      confirmationLink = `http://localhost:9000/blog/confirm-email?evt=${token}&username=${
        recipientData.username
      }`;
    }
    mailConfig = {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    };
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(mailConfig);

  let mailOptions;

  if (token) {
    mailOptions = {
      from: '"Bobby Sebolao" <bobbysebolao@gmail.com>"', //sender address
      to: `${recipientData.email}`, //list of receivers
      subject: "Console - Verify Email Address ✔", //subject linkedin
      text: `Hi ${recipientData.first_name},
      To verify this email address is yours, please copy and paste this link into your browser: ${confirmationLink}`, //plain text Body
      html: `<p>Hi ${recipientData.first_name},</p>
      <p>To verify this email address is yours, please click this link: <a href="${confirmationLink}">Confirm email</a></p>
      <p>Bee well,</p>
      <p>Bobby 🐝</p>` //html body
    };
  } else {
    let subjects = [];
    if (recipientData.websiteCheckbox) {
      subjects.push("website")
    }
    if (recipientData.contentCheckbox) {
      subjects.push("content")
    }
    if (recipientData.seoCheckbox) {
      subjects.push("SEO")
    }
    if (recipientData.otherCheckbox) {
      subjects.push("other")
    }
    subjects = subjects.join(", ");
    mailOptions = {
      from: '"Bobby Sebolao" <bobbysebolao@gmail.com>"', //sender address
      to: `bobbysebolao@gmail.com`, //list of receivers
      subject: `Contact form enquiry from ${recipientData.name}`, //subject linkedin
      text:`
      Name: ${recipientData.name}
      Email: ${recipientData.email}
      About: ${subjects}
      Message:
      ${recipientData.message}`, //plain text Body
      html: `<p><strong>Name:</strong> ${recipientData.name}</p>
      <p><strong>Email:</strong> ${recipientData.email}</p>
      <p><strong>About:</strong> ${subjects}</p>
      <p><strong>Message:</strong></p>
      <p>${recipientData.message}</p>` //html body
    };
  }

  // send email with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
