import { NextRequest, NextResponse } from 'next/server';

// Handler for POST requests to the login API endpoint
export async function POST(req: NextRequest) {
  // Parse the request body to get username and password
  const { username, password } = await req.json();

  // Check if username or password is missing and return a 400 error if so
  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
  }

  // Validate username and password
  if (username === 'username' && password === 'password') {
    // If valid, return a success response with user details
    return NextResponse.json({ message: 'Login successful', user: { name: 'Nodoka Matthews', email: 'nodokamatthews@example.com' } }, { status: 200 });
  } else {
    // If invalid, return an authentication failed response
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
  }
}
