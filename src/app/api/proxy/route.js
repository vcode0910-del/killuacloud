import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
    try {
        const body = await request.json();
        const { domain, apiKey, endpoint } = body;

        const response = await axios({
            url: `${domain}/api/client${endpoint}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/vnd.pterodactyl.v1+json'
            }
        });

        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json(
            { error: error.response?.data || 'Connection to Pterodactyl failed' },
            { status: 500 }
        );
    }
}
