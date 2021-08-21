const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.EMAIL_API_KEY);

export default async function handler(req, res) {
  let body = req.body;

  const message = `
      First Name: ${body.firstname}\r\n
      Last Name: ${body.lastname}\r\n
      Email: ${body.email}\r\n
      Phone Number: ${body.phone}\r\n
      Message: ${body.message}
      `;

  const data = {
    to: "info@balanceregenerativemedicine.org",
    from: "info@balanceregenerativemedicine.org",
    subject: `New message from ${body.firstname}`,
    text: message,
    html: message.replace(/\r\n/g, "<br/>"),
  };

  await mail.send(data).then(() => {
    res.status(200).json({ status: "Ok" });
  });
}
