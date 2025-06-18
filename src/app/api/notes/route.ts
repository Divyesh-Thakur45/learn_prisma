import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, price } = body;

    if (!name || !price) {
      return NextResponse.json({
        status: 400,
        message: "Please fill the form",
        error: "Name & price cannot be empty",
        success: false,
      });
    }
    console.log(name, price);
    console.log(prisma);
    return NextResponse.json({ name, price });
    // const data = await prisma.notes.create({
    //   data: { name, price },
    // });
    // console.log(data);
    // return NextResponse.json({
    //   status: 200,
    //   message: "POST successfully",
    //   data,
    //   success: true,
    // });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Server error in POST NOTES",
      error: error,
      success: false,
    });
  }
}
