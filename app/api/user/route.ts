import { NextRequest, NextResponse } from 'next/server';

// Handler for GET requests to the API endpoint
export async function GET() {
    // Define user data to be returned in the response
  const user = {
    name: 'Nodoka Matthews',
    email: 'nodokamatthews@example.com',
    nationality: 'Japanese',
  };
  return NextResponse.json(user, { status: 200 });
}
