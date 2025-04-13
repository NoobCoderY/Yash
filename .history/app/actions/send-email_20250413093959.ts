'use server';

import nodemailer from 'nodemailer';

type SendEmailOptions = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail({ name, email, message }: SendEmailOptions) {

  if (!name || !email || !message) {
    throw new Error('Missing required fields');
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`,
    replyTo: email,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: message,
    html: `
      <div>
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
