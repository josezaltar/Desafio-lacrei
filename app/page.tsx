import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ minHeight: '60vh', padding: '48px 24px' }}>
        <h1>Lacrei Saúde</h1>
        <p>Página inicial — conteúdo em desenvolvimento.</p>
      </main>
      <Footer variant="simples" />
    </>
  )
}