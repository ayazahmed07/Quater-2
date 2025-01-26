import exp from "constants";
import { NextRequest, NextResponse } from "next/server";

const todotasks: {id:number, title: string} [] = []

let letnum = 1


export async function GET (){
    return NextResponse.json(todotasks)
}

export async function POST(request: NextRequest) {
    const {title} = await request.json()
    const newtask = {
        id: letnum++,
        title,
    }

    todotasks.push(newtask)
    return NextResponse.json({message: "todo created"})

}

export async function PUT(request: NextResponse) {
    const {id, title} = await request.json()

    const taskindex = todotasks.findIndex((letnum) => letnum === id)
    

}