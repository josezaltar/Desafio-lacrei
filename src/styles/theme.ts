// ============================================================
// theme.ts — Marsha Design System – Lacrei Saúde
// Primitive Tokens + Semantic Tokens + Tipografia + Espaçamentos + Breakpoints + Grid
// ============================================================

export const theme = {

  // ----------------------------------------------------------
  // PRIMITIVE TOKENS — escalas brutas de cor
  // ----------------------------------------------------------
  primitives: {
    emerald: {
      10: '#DFF2ED',
      20: '#B2DFD0',
      30: '#80CAB1',
      40: '#4FB494',
      50: '#29A480',
      60: '#018762',
      70: '#007756',
      80: '#014C37',
    },
    green: {
      10: '#EBF9F0',
      20: '#C4EED1',
      30: '#9CE2B2',
      40: '#75D093',
      50: '#4ECB74',
      60: '#0BB15C',
      70: '#298A46',
      80: '#113B1E',
    },
    red: {
      10: '#FBEEEA',
      20: '#FCE9E9',
      30: '#F5B8BC',
      40: '#EE9090',
      50: '#963D1D',
      60: '#BC1C1C',
      70: '#9B1717',
      80: '#6F1111',
    },
    orange: {
      10: '#FDF4E6',
      20: '#F9E8CC',
      30: '#F7DDB3',
      40: '#F3D199',
      50: '#F1C580',
      60: '#EEB966',
      70: '#E9AE4D',
    },
    blue: {
      10: '#E8F1F5',
      20: '#C4DCED',
      30: '#A1C7E4',
      40: '#77ABCB',
      50: '#4D8FB2',
      60: '#2373A4',
      70: '#1A5A87',
      80: '#0D3A5A',
    },
    gray: {
      10: '#F5F5F5',
      20: '#E8E8E8',
      30: '#D3D3D3',
      40: '#BCBCBC',
      50: '#9E9E9E',
      60: '#757575',
      70: '#424242',
      80: '#212121',
    },
  },

  // ----------------------------------------------------------
  // SEMANTIC TOKENS — cores com significado na UI
  // ----------------------------------------------------------
  colors: {
    background: {
      default:        '#FAFAFA',
      subtle:         '#F5FFFB',
      disabled:       '#F5F5F5',
      success:        '#DFF2ED',
      successHover:   '#B2DFD0',
      successPressed: '#80CAB1',
      error:          '#FBEEEA',
      errorSubtle:    '#FCE9E9',
      errorHover:     '#F5B8BC',
      warning:        '#FDF4E6',
      info:           '#E8F1F5',
      inverse:        '#014C37',
      inverseHover:   '#007756',
    },
    text: {
      default:        '#212121',
      heading:        '#014C37',
      muted:          '#757575',
      accent:         '#018762',
      focus:          '#018762',
      success:        '#018762',
      successSubtle:  '#29A480',
      disabled:       '#9E9E9E',
      disabledSubtle: '#BCBCBC',
      error:          '#BC1C1C',
      warning:        '#E9AE4D',
      inverse:        '#FFFFFF',
      link:           '#2373A4',
    },
    border: {
      default:     '#D3D3D3',
      subtle:      '#E8E8E8',
      disabled:    '#BCBCBC',
      focus:       '#018762',
      primary:     '#018762',
      success:     '#29A480',
      error:       '#BC1C1C',
      errorSubtle: '#F5B8BC',
      warning:     '#E9AE4D',
    },
    icon: {
      default:        '#212121',
      muted:          '#757575',
      accent:         '#018762',
      disabled:       '#9E9E9E',
      disabledSubtle: '#BCBCBC',
      success:        '#018762',
      error:          '#BC1C1C',
      warning:        '#E9AE4D',
    },
    gradient: {
      primary:   'linear-gradient(135deg, #018383, #014687)',
      subtle:    'linear-gradient(135deg, #F5FFFB, #FFFFFF)',
      secondary: 'linear-gradient(135deg, #008392, #00BC86)',
    },
    primary:      '#018762',
    primaryDark:  '#007756',
    primaryLight: '#DFF2ED',
    white:        '#FFFFFF',
    black:        '#212121',
  },

  // ----------------------------------------------------------
  // TIPOGRAFIA — Marsha Design System
  // ----------------------------------------------------------
  typography: {
    fontFamily: {
      sans: "'Nunito', 'Inter', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    headline: {
      xl:        { fontSize: '48px', fontWeight: 700, lineHeight: '120%' },
      lg:        { fontSize: '40px', fontWeight: 700, lineHeight: '120%' },
      base:      { fontSize: '32px', fontWeight: 700, lineHeight: '120%' },
      sm:        { fontSize: '24px', fontWeight: 400, lineHeight: '150%' },
      smHigh200: { fontSize: '24px', fontWeight: 700, lineHeight: '150%' },
    },
    text: {
      xlHigh200:   { fontSize: '18px', fontWeight: 700, lineHeight: '150%' },
      xl:          { fontSize: '18px', fontWeight: 400, lineHeight: '150%' },
      base:        { fontSize: '16px', fontWeight: 400, lineHeight: '150%' },
      baseHigh200: { fontSize: '16px', fontWeight: 700, lineHeight: '150%' },
      sm:          { fontSize: '14px', fontWeight: 400, lineHeight: '150%' },
      smHigh200:   { fontSize: '14px', fontWeight: 600, lineHeight: '150%' },
      xs:          { fontSize: '12px', fontWeight: 400, lineHeight: '150%' },
      xsHigh200:   { fontSize: '12px', fontWeight: 700, lineHeight: '150%' },
    },
    fontSizes: {
      xs:    '12px',
      sm:    '14px',
      base:  '16px',
      lg:    '18px',
      xl:    '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
    },
    fontWeights: {
      regular:  400,
      semibold: 600,
      bold:     700,
    },
    lineHeights: {
      tight:  '120%',
      normal: '150%',
    },
  },

  // ----------------------------------------------------------
  // ESPAÇAMENTOS — nomenclatura oficial do Figma
  // ----------------------------------------------------------
  spacing: {
    none:  '0px',
    '02':  '2px',
    '04':  '4px',
    '08':  '8px',
    '12':  '12px',
    '16':  '16px',
    '24':  '24px',
    '32':  '32px',
    '40':  '40px',
    '48':  '48px',
    '56':  '56px',
    '64':  '64px',
    '96':  '96px',
    '128': '128px',
  },
  spacingStack: {
    xxs: '4px',  xs: '8px',  s: '12px', m: '16px',
    xm: '24px', xxm: '32px', l: '48px', xl: '64px',
  },
  spacingInline: {
    xxs: '4px',  xs: '8px',  s: '12px', m: '16px',
    xm: '24px', xxm: '32px', l: '48px', xl: '64px',
  },
  spacingInset: {
    xxs: '2px', xs: '4px', s: '8px', sm: '12px',
    m: '16px', xm: '24px', xxm: '32px', l: '48px',
  },
  spacingSquish: {
    xxs: '2px 4px',
    xs:  '4px 8px',
    s:   '8px 16px',
    m:   '16px 32px',
    l:   '24px 48px',
  },

  // ----------------------------------------------------------
  // GRID SYSTEM — Marsha Design System (Handoff)
  // Anatomia: columns · margin · gutter · row · container
  // ----------------------------------------------------------
  grid: {
    // sm — Mobile: 0px → 600px
    sm: {
      resolution: '0px - 600px',
      columns:    4,
      margin:     '24px',
      gutter:     '16px',
      row:        8,
      container:  'auto',
      maxWidth:   '100%',
    },
    // md — Tablet: 600px → 1024px
    md: {
      resolution: '600px - 1024px',
      columns:    8,
      margin:     '24px',
      gutter:     '24px',
      row:        8,
      container:  'auto',
      maxWidth:   '100%',
    },
    // lg — Desktop XS: 1024px → 1200px
    lg: {
      resolution: '1024px - 1200px',
      columns:    12,
      margin:     '24px',
      gutter:     '24px',
      row:        8,
      container:  'auto',
      maxWidth:   '840px',
    },
    // xl — Desktop SM+: 1200px → 1536px
    xl: {
      resolution: '1200px - 1536px',
      columns:    12,
      margin:     '24px',
      gutter:     '24px',
      row:        8,
      container:  'auto',
      maxWidth:   '1200px',
    },
  },

  // ----------------------------------------------------------
  // BREAKPOINTS — Marsha Design System (mobile-first)
  // ----------------------------------------------------------
  breakpoints: {
    sm:        '360px',
    md:        '600px',
    lg:        '1024px',
    xl:        '1200px',
    desktopSm: '1280px',
    desktopMd: '1440px',
    desktopLg: '1920px',
    ultraWide: '2560px',
  },

  // Helpers de media query para uso em styled-components
  media: {
    sm:        '@media (min-width: 360px)',
    md:        '@media (min-width: 600px)',
    lg:        '@media (min-width: 1024px)',
    xl:        '@media (min-width: 1200px)',
    desktopSm: '@media (min-width: 1280px)',
    desktopMd: '@media (min-width: 1440px)',
    desktopLg: '@media (min-width: 1920px)',
    ultraWide: '@media (min-width: 2560px)',
  },

  // ----------------------------------------------------------
  // BORDER RADIUS
  // ----------------------------------------------------------
  borderRadius: {
    none:  '0px',
    sm:    '4px',
    md:    '8px',
    lg:    '12px',
    xl:    '16px',
    '2xl': '24px',
    full:  '9999px',
  },

  // ----------------------------------------------------------
  // SOMBRAS
  // ----------------------------------------------------------
  shadows: {
    none:  'none',
    sm:    '0 1px 2px rgba(0, 0, 0, 0.08)',
    md:    '0 4px 8px rgba(0, 0, 0, 0.10)',
    lg:    '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl:    '0 16px 40px rgba(0, 0, 0, 0.14)',
    focus: '0 0 0 3px rgba(1, 135, 98, 0.4)',
  },

  // ----------------------------------------------------------
  // Z-INDEX
  // ----------------------------------------------------------
  zIndex: {
    hide:     -1,
    base:      0,
    raised:   10,
    dropdown: 100,
    sticky:   200,
    overlay:  300,
    modal:    400,
    toast:    500,
  },

} as const

export type Theme = typeof theme