"use client";
import { useEffect, useState } from 'react';
import { Server, Cpu, HardDrive } from 'lucide-react';
import axios from 'axios';

export default function Dashboard() {
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const domain = localStorage.getItem('pt_domain');
        const apiKey = localStorage.getItem('pt_key');

        if (!domain || !apiKey) {
            window.location.href = '/';
            return;
        }

        axios.post('/api/proxy', { domain, apiKey, endpoint: '/' })
            .then(res => setServers(res.data.data))
            .catch(() => alert("Failed to fetch servers"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">My Servers</h2>
                {loading ? <p className="text-gray-500">Loading...</p> : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {servers.map(s => (
                            <div key={s.attributes.uuid} className="bg-pt-card border border-gray-800 rounded-lg p-5 hover:border-pt-blue transition cursor-pointer">
                                <div className="flex justify-between mb-4">
                                    <h3 className="font-bold text-lg">{s.attributes.name}</h3>
                                    <span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-1 rounded">RUNNING</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-2"><Cpu size={14}/> {s.attributes.limits.cpu}%</div>
                                    <div className="flex items-center gap-2"><HardDrive size={14}/> {s.attributes.limits.memory}MB</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
  }
