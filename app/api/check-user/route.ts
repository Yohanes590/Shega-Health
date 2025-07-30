import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(request: Request) {
  const userRequest = await request.json();
  const eachUser = await prisma.user.create({
    data: {
  patient_id: userRequest.userId,
  medical_history:[],
  lab_results:[],
  emergency_info:[],
  appointment:[],
  prescription :[],
  card_info :[],
    }
  })
      return NextResponse.json({ message: eachUser });
}
