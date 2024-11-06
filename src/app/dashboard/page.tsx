'use client'

import { AuthProvider } from "@/app/dashboard/authContext";
import UserList from "@/components/userList";
import AddUserForm from "@/components/addUserForm";
import {UserProvider} from "@/app/dashboard/userContext";

export default function DashboardPage() {
    return (
        <AuthProvider>
            <UserProvider>
                <div className="bg-gray-100 min-h-screen w-full">
                    <div className="w-full max-w-[1400px] mx-auto">
                        <h1 className="text-3xl font-semibold mb-8">Usuarios</h1>
                        <div className="flex gap-6 w-full">
                            <div className="w-3/5 flex flex-col">
                                <UserList/>
                            </div>
                            <div className="w-2/5 flex flex-col">
                            <AddUserForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </UserProvider>
        </AuthProvider>
    );
}