'use client'
import { IUser } from '@/utils/data';
import { USER_LOCALSTORAGE_KEY } from '@/utils/localStorage';
import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

let userLocalStorage: string | null;

if (typeof window !== 'undefined') {
    userLocalStorage = localStorage.getItem(USER_LOCALSTORAGE_KEY);
}

interface IAuthContext {
  currentUser: Partial<IUser> | null;
  setCurrentUser: React.Dispatch<React.SetStateAction< Partial<IUser> | null>>;
}

export const AuthContext = createContext<IAuthContext>({
    currentUser: null,
    setCurrentUser: () => {},
});

export const AuthProvider:FC<PropsWithChildren> = ({ children }) => {
    const user = userLocalStorage ? JSON.parse(userLocalStorage) : null
    const [currentUser, setCurrentUser] = useState< Partial<IUser> | null>(user || null);
  
    const values = useMemo(
        () => ({
            currentUser,
            setCurrentUser,
        }),
        [currentUser]
    )

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext)