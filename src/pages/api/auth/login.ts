import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Mock user database (Replace with a real database)
const users = [
  {
    email: "user@example.com",
    password: bcrypt.hashSync("password123", 10), // Hashed password
  },
];

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Use a secure env variable

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  // Find user in the database
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Check password
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  res.status(200).json({ message: "Login successful", token });
}
