'use client'
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './ValidationError.module.css';
    
interface ValidationErrorProps {
    error: string
}
    
export const ValidationError = ({ error}: ValidationErrorProps) => {
    const [isClosed, setIsClosed] = useState(false); 
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if(error) {
            timerRef.current = 
                setTimeout(() => {
                    setIsClosed(true);
                }, 2500);
            setIsClosed(false);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [error])

    return createPortal(
        <div className={`${style.error} ${isClosed ? style.isClosed : style.isOpen}`}>
            <p>{error}</p>
        </div>, document.body
    );
};