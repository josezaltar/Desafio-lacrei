import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  width: 100%;
  background: ${({ theme }) => theme.colors.gradient.subtle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const HeaderInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['12']}
           ${({ theme }) => theme.spacing['24']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing['16']};
  height: 64px;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

// Navegação — só desktop, links "Quem somos" e "Ajuda"
export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['32']};

  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacingSquish.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.success};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`

// Campo de busca — só aparece quando logado (desktop)
export const SearchWrapper = styled.div`
  display: none;
  flex: 1;
  max-width: 400px;

  ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
    position: relative;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => theme.spacingSquish.xs};
  padding-right: ${({ theme }) => theme.spacing['48']};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  color: ${({ theme }) => theme.colors.text.default};
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }
`

export const SearchClearButton = styled.button`
  position: absolute;
  right: 44px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.muted};
  padding: ${({ theme }) => theme.spacing['04']};

  &:hover { color: ${({ theme }) => theme.colors.text.default}; }
`

export const SearchButton = styled.button`
  height: 40px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover { background-color: ${({ theme }) => theme.colors.primaryDark}; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`

// Área de ações do lado direito
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['08']};
`

// Botão "Ajuda" outline — aparece quando logado
export const HelpButton = styled.a`
  display: none;
  align-items: center;
  height: 36px;
  padding: ${({ theme }) => theme.spacingSquish.xs};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover { background-color: ${({ theme }) => theme.colors.background.success}; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }

  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

// Botão "Entrar" — sólido verde, com ícone pessoa
export const EntrarButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['08']};
  height: 40px;
  padding: ${({ theme }) => theme.spacingSquish.s};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover { background-color: ${({ theme }) => theme.colors.primaryDark}; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

// Ícone "?" de ajuda — mobile
export const HelpIconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover { background-color: ${({ theme }) => theme.colors.background.success}; }

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`

// Avatar + chevron
export const AvatarButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['04']};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing['04']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color 0.2s ease;

  &[aria-expanded='true'],
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.successHover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`

export const AvatarCircle = styled.div<{ hasImage?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.background.successPressed};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  overflow: hidden;
  flex-shrink: 0;
`

// Ícone de sair
export const LogoutButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.colors.text.muted};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.error};
    background-color: ${({ theme }) => theme.colors.background.error};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`

// Popover — dropdown do botão Entrar / Avatar
export const Popover = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow: hidden;
`

export const PopoverItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['12']};
  padding: ${({ theme }) => theme.spacingSquish.s};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.default};
  text-decoration: none;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  &:last-child { border-bottom: none; }

  &:hover { background-color: ${({ theme }) => theme.colors.background.success}; }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: -2px;
  }
`

export const PopoverAnchor = styled.div`
  position: relative;
`