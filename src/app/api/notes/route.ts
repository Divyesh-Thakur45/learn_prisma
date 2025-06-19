import { prisma } from "@/lib/prisma";
import { notesSchema } from "@/lib/validation/Notes.schema";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validateParse = notesSchema.safeParse(body);
    if (!validateParse.success) {
      return NextResponse.json(
        {
          status: 400,
          message: "Validation failed",
          errors: validateParse.error.formErrors.fieldErrors,
          success: false,
        },
        { status: 400 }
      );
    }
    const data = await prisma.notes.create({
      data: validateParse.data,
    });

    return NextResponse.json({
      status: 200,
      message: "POST successfully",
      data,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error in POST NOTES",
      error: error,
      success: false,
    });
  }
}

export async function GET() {
  try {
    const data = await prisma.notes.findMany();
    console.log(data);
    return NextResponse.json({
      status: 200,
      message: "Fetch successfully",
      data,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error in POST NOTES",
      error: error,
      success: false,
    });
  }
}
