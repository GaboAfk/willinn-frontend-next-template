import React, {useState} from "react";
import {Eye, EyeOff, Search} from "lucide-react";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

export default function UserList() {
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
        <div className="bg-white rounded-lg shadow p-6 mr-6">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold mr-4">Usuarios</h2>
                <div className="relative">
                    <div className="absolute inset-y-0 left-4 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                        <Search className="text-gray-400"></Search>
                    </div>
                    <input type="text" placeholder="Buscar"
                           className="bg-gray-100 border rounded-full pl-12 pr-4 py-2 text-sm focus:outline-none focus:border-gray-300"/>
                </div>
            </div>
            <div>
                <div className="flex pb-4 font-bold">
                    <p className="pr-24">Nombre</p>
                    <p>Correo</p>
                </div>
                <ScrollArea className="w-full text-left">
                    <div className="flex flex-col space-y-2">
                        {users.map((user, index) => (
                            <div key={index} className="bg-white border border-gray-300 p-2 rounded-lg shadow-md transition duration-200 hover:bg-gray-300">
                                <div className="flex items-center w-full">
                <span className="truncate text-left w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                    {user.name.trim()}
                </span>
                                </div>
                                <div className="text-right">
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <table className="w-full text-left">
                <thead>
                <tr>
                    <th className="pb-4">Nombre</th>
                    <th className="pb-4">Correo</th>
                    <th className="pb-4"></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-4">{user.name}</td>
                        <td className="py-4">{user.email}</td>
                        <td className="py-4 text-right">
                            <i className="fas fa-trash-alt text-pink-500 mr-3"></i>
                            <i className="fas fa-edit text-gray-400"></i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-6">
                <a href="#" className="text-pink-500 mx-2">Anterior</a>
                <a href="#" className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-2">1</a>
                <a href="#" className="text-pink-500 mx-2">2</a>
                <a href="#" className="text-pink-500 mx-2">3</a>
                <a href="#" className="text-pink-500 mx-2">4</a>
                <a href="#" className="text-pink-500 mx-2">Siguiente</a>
            </div>
        </div>

        /*<div className="bg-white rounded-lg shadow p-6 mr-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Usuarios</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
                    />
                    <i className="fas fa-search absolute left-3 top-2.5 text-gray-400" />
                </div>
            </div>
            <table className="w-full text-left">
                <thead>
                <tr>
                    <th className="pb-4">Nombre</th>
                    <th className="pb-4">Correo</th>
                    <th className="pb-4" />
                </tr>
                </thead>
                <tbody>
                {[...Array(8)].map((_, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-4">Francis Santos</td>
                        <td className="py-4">fsantos@willinn.io</td>
                        <td className="py-4 text-right">
                            <i className="fas fa-trash-alt text-pink-500 mr-3" />
                            <i className="fas fa-edit text-gray-400" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-6">
                <a href="#" className="text-pink-500 mx-2">Anterior</a>
                <a href="#" className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-2">1</a>
                <a href="#" className="text-pink-500 mx-2">Siguiente</a>
            </div>
        </div>*/
    );
}
