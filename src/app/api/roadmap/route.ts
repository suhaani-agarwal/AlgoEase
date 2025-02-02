import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add this in your .env file
});

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    // Fetch user data from Prisma
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create a prompt for AI
    const prompt = `
      Generate a personalized learning roadmap for a ${user.experienceLevel} level user (student)
      with goals - ${user.goals.join(", ")}. Learning style - ${user.learningStyle} with a ${user.timeCommitment} time commitment and experience of ${user.experienceLevel}.
      Provide a structured 3-month plan with daily goals.
    `;

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const roadmap = response.choices[0].message?.content;

    // Save roadmap in the database
    const savedRoadmap = await db.roadmap.create({
      data: {
        userId: user.id,
        content: roadmap!,
      },
    });

    return NextResponse.json({ roadmap: savedRoadmap }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
