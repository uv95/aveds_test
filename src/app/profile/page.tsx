'use client'

import { Button, ButtonSize, ButtonTheme } from '@/components/Button/Button'
import { Container } from '@/components/Container/Container'
import { ContentHeader } from '@/components/ContentHeader/ContentHeader'
import { useAuth } from '@/hooks/useAuth'
import { Routes } from '@/utils/routes'
import Link from 'next/link'
import style from './page.module.css'

export default function Profile() {
    const {currentUser, logout} = useAuth();

    return (
        <main>
            <Container>
                <ContentHeader>
                    <h1>Привет, {currentUser?.name}!</h1>
                    <div className={style.buttons}>
                        <Button theme={ButtonTheme.RED} size={ButtonSize.L}
                            onClick={logout}
                        >Выйти из аккаунта</Button>
                        <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>
                            <Link href={Routes.CONTACTS}>
                                Перейти в контакты
                            </Link>
                        </Button>
                    </div>
                </ContentHeader>
            </Container>
        </main>      
    )
}