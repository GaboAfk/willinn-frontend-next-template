import React, {useEffect, useState} from "react";
import { Input2 } from "@/components/ui/input";
import { Button2 } from "@/components/ui/button";
import axios from "axios";
import {useAuth} from "@/app/dashboard/authContext";
import {useUser} from "@/app/dashboard/userContext";
import {X} from "lucide-react";
import { User } from "@/types/user"

import { useRouter } from 'next/navigation';
import {UserId} from "@/types/userId";

const _backUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function UpdateUserForm({ userId } : { userId: UserId }) {
    const { authToken } = useAuth();
    const { setUsers } = useUser();
    const router = useRouter();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (!userId || !authToken) return;

            try {
                const response = await axios.get(
                    `${_backUrl}/users/${userId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                        }
                    }
                );
                if (response.status === 200) {
                    const oldUser = response.data as User;
                    const [firstName, lastName] = oldUser.name.split(" ");
                    setName(firstName || '');
                    setLastname(lastName || '');
                    setEmail(oldUser.email);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId, authToken]);


    const handleUpdater = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `${_backUrl}/users/${userId}`,
                {
                    id: userId,
                    name: name + ' ' + lastname,
                    email: email,
                    password: password
                },
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    }
                }
            );
            if (response.status === 200) {
                router.push("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative bg-white rounded-lg shadow p-6 flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-6">Modificar usuario</h2>
            <p className="text-gray-600 mb-4">
                Usuario: {name} {lastname}
            </p>
            <X type="button"
               onClick={() => router.push("/dashboard")}
               className="text-gray-500 hover:text-gray-300 hover:bg-gray-700 rounded-full absolute top-2 right-2 cursor-pointer"/>
            <form onSubmit={handleUpdater}>
                <div className="flex flex-col gap-6">
                    <div>
                        <Input2
                            id="name"
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nuevo nombre"/>
                        <Input2
                            id="lastname"
                            label="Apellido"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Nuevo apellido"/>
                    </div>
                    <div>
                        <Input2
                            id="register-email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nuevo email"/>
                        <Input2
                            id="register-password"
                            label="Contraseña"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nueva contraseña"/>
                    </div>
                </div>
                <div className="">
                    <Button2>Guardar</Button2>
                </div>
            </form>
        </div>
    );
}
