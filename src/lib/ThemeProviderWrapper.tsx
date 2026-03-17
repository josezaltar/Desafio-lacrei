'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/GlobalStyles'

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}