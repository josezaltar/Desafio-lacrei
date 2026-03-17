import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['32']}
           ${({ theme }) => theme.spacing['24']};

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.spacing['32']}
             ${({ theme }) => theme.spacing['48']};
  }
`

/* ---- Footer simples ---- */
export const FooterSimpleTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['24']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing['32']};
  }
`

export const FooterLogoLink = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  white-space: nowrap;

  /* garante que o SVG não quebre linha */
  svg { display: block; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

export const FooterSimpleNav = styled.nav``

export const FooterSimpleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing['32']};
  }
`

export const FooterSimpleItem = styled.li``

export const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text.default};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

/* ---- Footer institucional ---- */
export const FooterInstitucionalTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['32']};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 200px repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing['48']};
  }
`

export const FooterColTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.text.xlHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.xlHigh200.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: ${({ theme }) => theme.spacing['12']};
`

export const FooterColList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};
`

export const FooterColItem = styled.li``

/* ---- Redes sociais ---- */
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['16']};
  margin-top: ${({ theme }) => theme.spacing['24']};
`

/* ghost_button_icon — 48x48px desktop, 40x40px mobile */
export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  flex-shrink: 0;

  ${({ theme }) => theme.media.lg} {
    width: 48px;
    height: 48px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.success};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`

/* ---- Divider ---- */
export const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  margin: ${({ theme }) => theme.spacing['24']} 0;
`

/* ---- Aviso CVV ---- */
export const FooterCVV = styled.p`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  max-width: 720px;
  margin-bottom: ${({ theme }) => theme.spacing['16']};
`

/* ---- Rodapé inferior ---- */
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['12']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterLegal = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: none; /* override do reset global que limita p a 75ch */
`

/* Botão voltar ao topo — fixed no mobile, static no desktop */
export const BackToTopButton = styled.button<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.3s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  flex-shrink: 0;

  /* mobile: fixo no canto inferior direito */
  position: fixed;
  bottom: ${({ theme }) => theme.spacing['24']};
  right: ${({ theme }) => theme.spacing['24']};
  z-index: ${({ theme }) => theme.zIndex.raised};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.success};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }

  /* desktop: estático no layout */
  ${({ theme }) => theme.media.lg} {
    position: static;
  }
`