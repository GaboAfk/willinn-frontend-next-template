import React, {createContext, useContext, useEffect, useState} from "react";
import {useAuth} from "@/app/dashboard/authContext";
import {User} from "@/types/user";
import axios from "axios";

interface UserContextType {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    fetchUserList: () => void;
}

const UserContext = createContext<UserContextType>({
    users: [],
    setUsers: () => {},
    fetchUserList: () => {},
});

export const useUser = () => useContext(UserContext);

const _backUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const UserProvider = ({ children}: { children: React.ReactNode }) => {
    const { authEmail, authToken } = useAuth();
    const [users, setUsers] = useState<User[]>([]);

    const fetchUserList = async () => {
        if (!authEmail) return;

        try {
            const response = await axios.get(`${_backUrl}/users`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            const mappedUsers = response.data.map((user: User) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                isActive: user.isActive
            }));
            const filteredUsers = mappedUsers.filter((user: User) => user.isActive);
            setUsers(filteredUsers);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (authEmail && authToken) {
            fetchUserList()
        }
    }, [authEmail, authToken]);

    return (
        <UserContext.Provider value={{ users, setUsers, fetchUserList}}>
            {children}
        </UserContext.Provider>
    );
};