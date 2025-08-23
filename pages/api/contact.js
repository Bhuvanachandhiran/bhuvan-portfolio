import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log("DEBUG: EMAIL =", process.env.EMAIL);
  console.log("DEBUG: EMAIL_PASS exists =", !!process.env.EMAIL_PASS);

  if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      success: false,
      message: 'Server config error: Missing EMAIL or EMAIL_PASS',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL}>`,
      replyTo: email,
      to: process.env.EMAIL,
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
}
