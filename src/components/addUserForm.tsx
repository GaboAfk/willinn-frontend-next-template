import React from "react";

export default function AddUserForm() {
    return (
        <div className=" bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Agregar usuario</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Introduce el nombre"
                        className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido" className="block text-gray-700">Apellido</label>
                    <input
                        type="text"
                        id="apellido"
                        placeholder="Introduce el apellido"
                        className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Introduce tu E-mail"
                        className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Introduce tu contraseña"
                        className="w-full bg-gray-100 rounded-lg p-2 mt-2 focus:outline-none"
                    />
                </div>
                <button type="submit" className="w-full bg-purple-500 text-white rounded-lg p-2">
                    Guardar
                </button>
            </form>
        </div>
    );
}
