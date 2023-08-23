'use client'
import { useAuthContext } from "@/context/AuthContext";
import { userData } from "@/utils/data";
import { USER_LOCALSTORAGE_KEY } from "@/utils/localStorage";
import { Routes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth () {
    const router = useRouter();
    const {currentUser, setCurrentUser} = useAuthContext()

    const [error, setError] = useState('');

    const login = (formData: {email:string, password: string}) => {
        const user = userData.find(user => user.email === formData.email && user.password === formData.password)

        if(!user) { 
            setError('Неверный email или пароль!');
            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }

        setCurrentUser({name: user.name, email: user.email})
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({name: user.name, email: user.email}))
        router.push(Routes.PROFILE)
    }

    const logout = () => {
        router.push(Routes.MAIN)
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        setCurrentUser(null);
    }

    return { error, currentUser, login, logout}
}