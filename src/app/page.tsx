import { Container } from '@/components/Container/Container'
import { Loader } from '@/components/Loader/Loader'
import { MainPageContent } from '@/components/MainPageContent/MainPageContent'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <Container>
                <MainPageContent/>
            </Container>
        </main>      
    )
}
