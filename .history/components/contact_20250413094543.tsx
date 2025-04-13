"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
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
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91-9305890894",
      link: "tel:+919305890894",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "yashdiwaker74@gmail.com",
      link: "mailto:yashdiwaker74@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Kanpur, India",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out to me for any questions, project inquiries, or just to say hello! I'm always open to
            discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-start">
                    <div className="p-3 bg-gray-800 rounded-lg mr-4">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <a href={info.link} className="text-gray-400 hover:text-primary transition-colors">
                        {info.details}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800/50 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800/50 border-gray-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="min-h-[150px] bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
