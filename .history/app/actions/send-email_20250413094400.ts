'use server';

import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail(formData: FormData) {
  // Validate input
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Missing required fields');
  }

  // Create transporter (using Gmail as example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${formData.name}" <${formData.email}>`,
    replyTo: formData.email,
    to: process.env.EMAIL_USER, // Your email where you want to receive messages
    subject: formData.subject || `New message from ${formData.name}`,
    text: formData.message,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
      formData.email
    }</a></p>
        ${
          formData.subject
            ? `<p><strong>Subject:</strong> ${formData.subject}</p>`
            : ''
        }
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.875rem;">
          This message was sent from your portfolio contact form.
        </p>
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
