import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const user = {
    name: 'Nodoka Matthews',
    email: 'nodokamatthews@example.com',
    nationality: 'Japanese',
  };
  return NextResponse.json(user, { status: 200 });
}
