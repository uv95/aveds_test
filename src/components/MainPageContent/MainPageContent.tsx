'use client'
import { Routes } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';
import doc from '../../assets/doc.png';
import heart from '../../assets/heart.png';
import stethoscope from '../../assets/stethoscope.png';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { Card } from '../Card/Card';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { LoginButton } from '../LoginButton/LoginButton';
import style from './MainPageContent.module.css';
    
export const MainPageContent = () => {
    const data = [
        {
            icon: heart,
            title: 'Онлайн-прием',
            text: 'Рыба текст'
        },
        {
            icon: stethoscope,
            title: 'Экстренный Случай',
            text: 'Рыба текст'
        },
        {
            icon: doc,
            title: 'Лечение рака',
            text: 'Рыба текст'
        }
    ]

    return (
        <div className={style.content}>
            <ContentHeader>
                <h1>Место для получения медицинской помощи</h1>
                <div className={style.buttons}>
                    <LoginButton theme={ButtonTheme.RED} size={ButtonSize.L} isOnMainPage/>
                    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>
                        <Link href={Routes.CONTACTS}>
                            Контакты
                        </Link>
                    </Button>
                </div>
            </ContentHeader>

            <div className={style.cards}>
                {
                    data.map(card => (
                        <Card key={card.title} className={style.card}>
                            <div className={style.icon}>
                                <Image src={card.icon} alt={card.title} width={32} height={32}/>
                            </div>
                            <h5 className={style.title}>{card.title}</h5>
                            <div className={style.line}></div>
                            <p className={style.text}>{card.text}</p>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};