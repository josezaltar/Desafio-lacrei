import styled from 'styled-components'

// Container principal — respeita o grid do Marsha DS
// sm:  4 colunas, margin 24px, gutter 16px, max-width 100%
// md:  8 colunas, margin 24px, gutter 24px, max-width 100%
// lg: 12 colunas, margin 24px, gutter 24px, max-width 840px
// xl: 12 colunas, margin 24px, gutter 24px, max-width 1200px

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing['24']};
  padding-right: ${({ theme }) => theme.spacing['24']};

  /* sm → md: max-width 100% */
  max-width: 100%;

  /* lg: max-width 840px */
  ${({ theme }) => theme.media.lg} {
    max-width: 840px;
  }

  /* xl: max-width 1200px */
  ${({ theme }) => theme.media.xl} {
    max-width: 1200px;
  }
`

// Grid de colunas — usa CSS Grid com gutter do DS
// Uso: <Grid cols={12}> ou <Grid cols={4}>
export const Grid = styled.div<{ cols?: number }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing['16']}; /* gutter sm: 16px */

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(8, 1fr);
    gap: ${({ theme }) => theme.spacing['24']}; /* gutter md+: 24px */
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(${({ cols }) => cols ?? 12}, 1fr);
    gap: ${({ theme }) => theme.spacing['24']};
  }
`

// Col — coluna individual do grid
// Uso: <Col span={6}> (ocupa 6 de 12 colunas no desktop)
export const Col = styled.div<{
  span?:   number   // colunas no desktop
  spanMd?: number   // colunas no tablet
  spanSm?: number   // colunas no mobile
}>`
  grid-column: span ${({ spanSm }) => spanSm ?? 4};

  ${({ theme, spanMd }) => `${theme.media.md} { grid-column: span ${spanMd ?? 8}; }`}
  ${({ theme, span })   => `${theme.media.lg} { grid-column: span ${span   ?? 12}; }`}
`

// Section — espaçamento vertical entre seções de conteúdo
export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing['48']};
  padding-bottom: ${({ theme }) => theme.spacing['48']};

  ${({ theme }) => theme.media.lg} {
    padding-top: ${({ theme }) => theme.spacing['64']};
    padding-bottom: ${({ theme }) => theme.spacing['64']};
  }
`