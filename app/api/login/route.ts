import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
  }

  if (username === 'username' && password === 'password') {
    return NextResponse.json({ message: 'Login successful', user: { name: 'Nodoka Matthews', email: 'nodokamatthews@example.com' } }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
  }
}
