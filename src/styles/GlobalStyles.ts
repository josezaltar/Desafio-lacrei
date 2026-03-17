import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* --------------------------------------------------------
   * Reset & Box Model
   * -------------------------------------------------------- */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* --------------------------------------------------------
   * Root & HTML
   * -------------------------------------------------------- */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  /* --------------------------------------------------------
   * Body — tipografia base: text.base (16px / regular / 150%)
   * -------------------------------------------------------- */
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    color: ${({ theme }) => theme.colors.text.default};
    background-color: ${({ theme }) => theme.colors.background.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* --------------------------------------------------------
   * Headings — hierarquia Marsha DS
   * -------------------------------------------------------- */
  h1 {
    font-size: ${({ theme }) => theme.typography.headline.xl.fontSize};
    font-weight: ${({ theme }) => theme.typography.headline.xl.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.xl.lineHeight};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.headline.lg.fontSize};
    font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.lg.lineHeight};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.headline.base.fontSize};
    font-weight: ${({ theme }) => theme.typography.headline.base.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.base.lineHeight};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.headline.sm.fontSize};
    font-weight: ${({ theme }) => theme.typography.headline.smHigh200.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.sm.lineHeight};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  h5, h6 {
    font-size: ${({ theme }) => theme.typography.headline.sm.fontSize};
    font-weight: ${({ theme }) => theme.typography.headline.sm.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.sm.lineHeight};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  /* --------------------------------------------------------
   * Parágrafos e texto corrido
   * -------------------------------------------------------- */
  p {
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
    color: ${({ theme }) => theme.colors.text.default};
    /* Largura ideal de leitura: 45–75 caracteres (Marsha DS) */
    max-width: 75ch;
  }

  /* --------------------------------------------------------
   * Links
   * -------------------------------------------------------- */
  a {
    color: ${({ theme }) => theme.colors.text.link};
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.text.link};
    }
  }

  /* --------------------------------------------------------
   * Imagens — lazy load friendly
   * -------------------------------------------------------- */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* --------------------------------------------------------
   * Formulários — reset base
   * -------------------------------------------------------- */
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* --------------------------------------------------------
   * Listas
   * -------------------------------------------------------- */
  ul, ol {
    list-style: none;
  }

  /* --------------------------------------------------------
   * Acessibilidade — foco visível para navegação por teclado
   * Segue critério WCAG 2.1 AA (ratio 3:1 mínimo)
   * Emerald-60 (#018762) sobre branco = 4.52:1 ✓
   * -------------------------------------------------------- */
  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  /* Remove outline padrão quando não é navegação por teclado */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* --------------------------------------------------------
   * Skip link — acessibilidade (pular para conteúdo principal)
   * -------------------------------------------------------- */
  .skip-link {
    position: absolute;
    top: -100%;
    left: ${({ theme }) => theme.spacing['16']};
    z-index: ${({ theme }) => theme.zIndex.toast};
    padding: ${({ theme }) => theme.spacingSquish.s};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    text-decoration: none;
    transition: top 0.2s ease;

    &:focus {
      top: ${({ theme }) => theme.spacing['16']};
    }
  }

  /* --------------------------------------------------------
   * Seleção de texto — cor primária da marca
   * -------------------------------------------------------- */
  ::selection {
    background-color: ${({ theme }) => theme.colors.background.successHover};
    color: ${({ theme }) => theme.colors.text.heading};
  }

  /* --------------------------------------------------------
   * Scrollbar — sutil e alinhada com a marca
   * -------------------------------------------------------- */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.disabled};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primitives.emerald[30]};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  /* --------------------------------------------------------
   * Reduced motion — respeita preferência de acessibilidade
   * -------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`