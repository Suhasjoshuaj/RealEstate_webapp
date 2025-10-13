import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/" , (req, res) =>{
  res.send("API is running...");
  console.log("API is running...");
});

app.post("/send-form", async (req, res) => {
  const { name, phone, email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: "noreply@gateddream.com", // Resend verified
      to: `${import.meta.env.ZMAIL}`, // My Zoho mail
      subject: `New Inquiry from ${name}`,
      html: `
        <h3>New Inquiry from Website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });
    res.json({ success: true, id: data.id });
  } catch (err) {
    console.error("Resend Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => console.log(`🚀 Backend running on http://localhost:${port}`));
