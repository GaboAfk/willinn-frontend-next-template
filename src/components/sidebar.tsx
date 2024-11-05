import React from "react";
import Link from "next/link";
import {House, Users} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex flex-col min-h-screen bg-white p-6 px-10">
            <Link href="/">
                <div className="flex justify-center mt-5 mb-12">
                    <img
                        src="/willinnlogo.png"
                        alt="Willinn Logo"
                        width="100"
                        height="50"
                    />
                </div>
                <div className="flex items-center text-gray-300 mb-6">
                    <div className="px-3">
                        <House></House>
                    </div>
                    <div className="justify-start">Inicio</div>
                </div>
            </Link>

            <Link href="/dashboard">
                <div className="flex text-pink-500 mb-6">
                    <div className="px-3">
                        <Users></Users>
                    </div>
                    <div className="justify-start">Usuarios</div>
                </div>
            </Link>
        </div>
    );
}


