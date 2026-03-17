import styled from 'styled-components'

// ----------------------------------------------------------
// Wrapper principal
// ----------------------------------------------------------
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

// ----------------------------------------------------------
// Footer simples (profissional/usuária)
// Desktop: logo + links numa linha + redes + CNPJ
// ----------------------------------------------------------
export const FooterSimpleTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing['24']};
  }
`

export const FooterLogoLink = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

// Links simples — ul > li em linha (desktop) ou coluna (mobile)
export const FooterSimpleNav = styled.nav``

export const FooterSimpleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing['24']};
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

// ----------------------------------------------------------
// Footer institucional — 3 colunas de links com título h2
// ----------------------------------------------------------
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
  margin-bottom: ${({ theme }) => theme.spacing['08']};
`

export const FooterColList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};
`

export const FooterColItem = styled.li``

// ----------------------------------------------------------
// Área de redes sociais
// ----------------------------------------------------------
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['16']};
  margin-top: ${({ theme }) => theme.spacing['32']};

  ${({ theme }) => theme.media.lg} {
    margin-top: ${({ theme }) => theme.spacing['24']};
    gap: ${({ theme }) => theme.spacing['16']};
  }
`

// ghost_button_icon — 48x48px desktop, 24x24px mobile
export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.icon.accent};
  text-decoration: none;
  transition: opacity 0.2s ease;

  ${({ theme }) => theme.media.lg} {
    width: 48px;
    height: 48px;
  }

  &:hover { opacity: 0.75; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`

// ----------------------------------------------------------
// Divider
// ----------------------------------------------------------
export const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  margin: ${({ theme }) => theme.spacing['32']} 0;
`

// ----------------------------------------------------------
// Aviso CVV — footer institucional
// ----------------------------------------------------------
export const FooterCVV = styled.p`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  max-width: 720px;
`

// ----------------------------------------------------------
// Rodapé inferior — CNPJ + copyright + botão topo
// ----------------------------------------------------------
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterLegal = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
`

// Botão "voltar ao topo" — secondary-button-icon, opcional
// Aparece quando scroll >= 100px
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

  &:hover { background-color: ${({ theme }) => theme.colors.background.success}; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }

  /* No mobile fica fixo no canto inferior direito */
  position: fixed;
  bottom: ${({ theme }) => theme.spacing['24']};
  right: ${({ theme }) => theme.spacing['24']};
  z-index: ${({ theme }) => theme.zIndex.raised};

  ${({ theme }) => theme.media.lg} {
    position: static;
  }
`