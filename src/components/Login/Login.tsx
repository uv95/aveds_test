'use client'

import { useAuth } from '@/hooks/useAuth';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { ValidationError } from '../ValidationError/ValidationError';
import style from './Login.module.css';

interface LoginProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
    
export const Login = ({setIsModalOpen }: LoginProps) => {
    const {login, error, currentUser} = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const { email, password } = formData;

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [target.id]: target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(formData);
    };

    useEffect(() => {
        !error && currentUser && setIsModalOpen(false)
    }, [error, currentUser, setIsModalOpen])

    return (
        <>
            {error && <ValidationError error={error}/>}

            <form className={style.form} onSubmit={onSubmit}>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required value={email} onChange={onChange}/>
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" required minLength={8} value={password} onChange={onChange}/>
                </div>
                <Button type='submit' theme={ButtonTheme.OUTLINE} size={ButtonSize.M}>Войти</Button>
            </form>
        </>
    );
};