
// /api/auth/login/route.js
// "use client"
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// // import prisma from "@/lib/prisma"; // Ensure prisma.ts exists
// import jwt from "jsonwebtoken";

// const SECRET_KEY = '';

// export async function POST(req) {
//   try {
//     console.log("initialising login route")
//     const { email, password } = await req.json(); // Identifier can be email or username

//     // Find user by email or username
//     const user = await prisma.user.findFirst({
//       where: { email },
//     });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     // Compare hashed password
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { userId: user.id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '24h' }
//     );

//     const response = NextResponse.json(
//       { 
//         message: "Login successful", 
//         user: { 
//           id: user.id, 
//           email: user.email, 
//           username: user.username 
//         },
//         token 
//       },
//       { status: 200 }
//     );

//     // Set HTTP-only cookie
//     response.cookies.set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 24 * 60 * 60 * 1000 // 24 hours
//     });

//     return response;

//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }




// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// const SECRET_KEY = 'your-secret-key'; // Use an environment variable for better security

// // Fake user data for illustration purposes
// const users = [{ username: 'test', password: '$2a$10$OgW0aPT7y6OHNOH8/WkkqO9rHiVJ1lzMt.X9T0RH.ZVfo/oygO62y' }]; // bcrypt hashed password

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password } = req.body;

//     // Find the user by username
//     const user = users.find((u) => u.username === username);
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     // Compare passwords
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

//     return res.status(200).json({ token });
//   }

//   res.status(405).json({ message: 'Method Not Allowed' });
// }


// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         const { email, password } = await req.json();

//         // Validate input
//         if (!email || !password) {
//             return NextResponse.json({ error: "Email and password required" }, { status: 400 });
//         }

//         // Your authentication logic (e.g., check DB)
//         return NextResponse.json({ message: "Login successful" }, { status: 200 });

//     } catch (error) {
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
// }
