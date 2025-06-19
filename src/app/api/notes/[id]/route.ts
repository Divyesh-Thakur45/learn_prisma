import { prisma } from "@/lib/prisma";
import { notesSchema } from "@/lib/validation/Notes.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;
    console.log(id);
    if (!id) {
      return NextResponse.json(
        { status: 400, message: "Invalid ID", success: false },
        { status: 400 }
      );
    }
    const data = await prisma.notes.findUnique({
      where: { id: Number(id) },
    });

    if (!data) {
      return NextResponse.json(
        { status: 404, message: "Note not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({
      status: 200,
      message: "fetch successfully",
      data,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error in GET ONE NOTES",
      error: error,
      success: false,
    });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { status: 400, message: "Invalid ID", success: false },
        { status: 400 }
      );
    }
    const body = await req.json();
    const validateParse = notesSchema.safeParse(body);
    if (!validateParse.success) {
      return NextResponse.json(
        {
          status: 400,
          message: "Validation failed",
          errors: validateParse?.error?.formErrors.fieldErrors,
          success: false,
        },
        { status: 400 }
      );
    }
    const data = await prisma.notes.update({
      where: { id: Number(id) },
      data: validateParse.data,
    });

    if (!data) {
      return NextResponse.json(
        { status: 404, message: "Note not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({
      status: 200,
      message: "Patch successfully",
      data,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error in GET ONE NOTES",
      error: error,
      success: false,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { status: 400, message: "Invalid ID", success: false },
        { status: 400 }
      );
    }
    const data = await prisma.notes.delete({
      where: { id: Number(id) },
    });
    if (!data) {
      return NextResponse.json(
        { status: 404, message: "Note not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({
      status: 200,
      message: "Delete successfully",
      data,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error in Delete Notes",
      error: error,
      success: false,
    });
  }
}
