'use client'

import { Eye, EyeOff } from 'lucide-react';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import axios from "axios";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/login`, {
                email: email,
                password: password
            });
            if (response.status === 200 && response.data.isSuccess) {
                localStorage.setItem('token', response.data.token);
                router.push('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md mx-auto">
                <div className="mb-6">
                    <Image src="/willinnlogo.png" alt="Willinn Logo" width="100" height="50" className="mx-auto mb-4"/>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl text-gray-800 font-semibold text-center mb-6">Inicia sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Introduce tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Introduce tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                     onClick={toggleShowPassword}>
                                    {showPassword ? <EyeOff className="text-gray-400"/> : <Eye className="text-gray-400"/>}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-pink-500 text-white font-semibold rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                Ingresar
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                                Registrarse
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                                ¿Olvidaste la contraseña?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
