import { createAuthClient } from 'better-auth/client'
import { NextRequest, NextResponse } from 'next/server';

export const client = createAuthClient();

export async function authMiddleware(request: NextRequest) {
    const { data: session } = await client.getSession({
        fetchOptions: {
            headers: {
                cookie: request.headers.get('cookie') || ""
            }
        }
    })
    if (session) {
        return NextResponse.next()
    }
    return NextResponse.redirect("/")
}