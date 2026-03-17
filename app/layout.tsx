import type { Metadata } from 'next'
import { StyledComponentsRegistry } from '@/lib/StyledComponentsRegistry'
import { ThemeProviderWrapper } from '@/lib/ThemeProviderWrapper'

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Saúde inclusiva e acessível para a comunidade LGBTQIA+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}