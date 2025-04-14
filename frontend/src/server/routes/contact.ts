// // server/routes/contact.ts
// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// // Create a router - this is crucial!
// const router = express.Router();

// interface ContactFormData {
//   name: string;
//   email: string;
//   company?: string;
//   description: string;
// }

// // Attach route handler to the router
// router.post("/api/contact", async (req, res) => {
//   try {
//     // Get form data from request body
//     const { name, email, company, description } = req.body as ContactFormData;

//     // Validate required fields
//     if (!name || !email || !description) {
//       return res
//         .status(400)
//         .json({ message: "Please fill all required fields" });
//     }

//     // Configure nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST || "smtp.example.com",
//       port: parseInt(process.env.EMAIL_PORT || "587", 10),
//       secure: process.env.EMAIL_SECURE === "true",
//       auth: {
//         user: process.env.EMAIL_USER || "your-email@example.com",
//         pass: process.env.EMAIL_PASSWORD || "your-password",
//       },
//     });

//     // Compose email
//     const mailOptions = {
//       from: process.env.EMAIL_FROM || "noreply@performacemedia.com",
//       to: process.env.EMAIL_TO || "sales@performacemedia.com",
//       replyTo: email,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h1>New Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company || "Not provided"}</p>
//         <p><strong>Description:</strong></p>
//         <p>${description}</p>
//       `,
//       text: `
//         New Contact Form Submission

//         Name: ${name}
//         Email: ${email}
//         Company: ${company || "Not provided"}
//         Description: ${description}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ message: "Failed to send email" });
//   }
// });

// // Export the router - not the route handler!
// export default router;
