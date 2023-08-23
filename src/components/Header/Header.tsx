import { Routes } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { LoginButton } from '../LoginButton/LoginButton';
import logo from '../../assets/logo.png'
import style from './Header.module.css';
    
export const Header = () => {
    return (
        <header className={style.header}>
            <Button theme={ButtonTheme.CLEAN}>
                <Link href={Routes.MAIN} className={style.logo}>
                    <Image src={logo} alt='logo' width={53} height={22}/>
                </Link>
            </Button>
            <div className={style.buttons}>
                <Button theme={ButtonTheme.CLEAN}>
                    <Link href={Routes.CONTACTS}>
                        Контакты
                    </Link>
                </Button>
                <LoginButton theme={ButtonTheme.OUTLINE} size={ButtonSize.M}/>
            </div>
        </header>
    );
};