import { NextResponse } from "next/server"

export default function POST() {
    try {

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            message: "server error in POST NOTES",
            error: error,
            success: false,
        })
    }
}