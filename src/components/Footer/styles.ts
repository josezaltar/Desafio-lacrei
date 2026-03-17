import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};

  /* Espaçamento entre footer e qualquer elemento: 64px */
  margin-top: ${({ theme }) => theme.spacing['64']};
`

export const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['48']}
           ${({ theme }) => theme.spacing['24']};

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.spacing['48']}
             ${({ theme }) => theme.spacing['48']};
  }
`

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['32']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['12']};
`

export const FooterTagline = styled.p`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: 280px;
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['08']};
`

export const FooterNavTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: ${({ theme }) => theme.spacing['04']};
`

export const FooterNavLink = styled.a`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

export const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
  margin: ${({ theme }) => theme.spacing['32']} 0;
`

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing['16']};

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['16']};
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text.muted};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.border.primary};
    background-color: ${({ theme }) => theme.colors.background.success};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`

export const FooterLegal = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
  color: ${({ theme }) => theme.colors.text.muted};
`