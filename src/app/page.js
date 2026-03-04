"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [domain, setDomain] = useState('');
    const [apiKey, setApiKey] = useState('');
    const router = useRouter();

    const handleConnect = () => {
        if (!domain || !apiKey) return alert("Please fill all fields");
        localStorage.setItem('pt_domain', domain.replace(/\/$/, ""));
        localStorage.setItem('pt_key', apiKey);
        router.push('/dashboard');
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md bg-pt-card p-8 rounded-lg border-t-4 border-pt-blue shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-white">PTERODACTYL <span className="text-pt-blue">PANEL</span></h1>
                <div className="space-y-4">
                    <input 
                        type="text" placeholder="https://panel.example.com" 
                        className="w-full p-3 bg-pt-input border border-gray-800 rounded outline-none focus:border-pt-blue text-white"
                        onChange={(e) => setDomain(e.target.value)}
                    />
                    <input 
                        type="password" placeholder="API Key (PTLA or PTLC)" 
                        className="w-full p-3 bg-pt-input border border-gray-800 rounded outline-none focus:border-pt-blue text-white"
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                    <button 
                        onClick={handleConnect}
                        className="w-full bg-pt-blue hover:bg-blue-600 p-3 rounded font-bold transition"
                    >
                        CONNECT
                    </button>
                </div>
            </div>
        </div>
    );
}
