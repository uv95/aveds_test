'use client'
import { useAuth } from '@/hooks/useAuth';
import { Routes } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { Login } from '../Login/Login';
import Modal from '../Modal/Modal';
    
interface LoginButtonProps {
    size: ButtonSize,
    theme: ButtonTheme,
    isOnMainPage?:boolean
}
    
export const LoginButton = ({size, theme, isOnMainPage}: LoginButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {currentUser, logout} = useAuth();
    const router = useRouter();

    const clickHandler = () => {
        if(currentUser) {
            setIsModalOpen(false);
            isOnMainPage ? router.push(Routes.PROFILE) : logout();
        }
       
        if(!currentUser) setIsModalOpen(true)
    }

    return (
        <>
            {isModalOpen && <Modal close={() => setIsModalOpen(false) }>
                <Login setIsModalOpen={setIsModalOpen}/>
            </Modal>}
            <Button theme={theme} size={size}
                onClick={clickHandler}
            >{currentUser ? isOnMainPage ? 'Личный кабинет' : 'Выйти' : 'Войти'}</Button>
        </>
    );
};