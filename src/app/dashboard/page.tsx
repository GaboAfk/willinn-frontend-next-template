'use client'

import UserList from "@/components/userList";
import AddUserForm from "@/components/addUserForm";

export default function DashboardPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex text-gray-800">
            <div>
                <h1 className="text-3xl font-semibold mb-8">Usuarios</h1>
                <div className="flex">
                    <UserList/>
                    <AddUserForm/>
                </div>
            </div>
        </div>
    );
}


/*
import { useState } from 'react';

export default function Home() {
    const [users, setUsers] = useState([
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
        { name: 'Francis Santos', email: 'fsantos@willinn.io' },
    ]);

    return (
        <div className="bg-gray-100 min-h-screen flex text-gray-800">
            {/!* Main Content *!/}

            <div>
                <h1 className="text-3xl font-semibold mb-8">Usuarios</h1>
                <div className="flex">
                    {/!*{<UserList/>}*!/}


                    {/!* Add User Form *!/}
                    {/!*<div className="w-1/3 bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-6">Agregar usuario</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                                <input type="text" id="nombre" placeholder="Introduce el nombre" className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="apellido" className="block text-gray-700">Apellido</label>
                                <input type="text" id="apellido" placeholder="Introduce el apellido" className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">E-mail</label>
                                <input type="email" id="email" placeholder="Introduce tu E-mail" className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                                <input type="password" id="password" placeholder="Introduce tu contraseña" className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="activar" className="block text-gray-700 mb-2">Activar</label>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" id="activar" name="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label htmlFor="activar" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-purple-500 text-white rounded-lg p-2">Guardar</button>
                        </form>
                    </div>*!/}
                </div>
            </div>
        </div>
    );
}*/
