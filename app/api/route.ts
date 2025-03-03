import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Prepare email data
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject || "N/A"}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log the submission (you can remove this in production)
    console.log("Contact form submission:", {
      name,
      email,
      subject: subject || "Contact Form Submission",
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({ message: "Thank you for your message! We'll get back to you soon." }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Failed to process your request. Please try again later." }, { status: 500 })
  }
}

