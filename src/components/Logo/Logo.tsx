'use client'

// ─────────────────────────────────────────────────────────────
// Logo.tsx — Lacrei Saúde
// Baseado no Marsha Design System (prints do Figma)
//
// Variantes:
//   horizontalTotal  → símbolo + "Lacrei Saúde" em UMA linha  (header)
//   horizontal       → símbolo + "Lacrei\nSaúde" em duas linhas (footer)
//   vertical         → símbolo acima + texto abaixo
//   symbol           → só o símbolo LS
//
// Cores:
//   green    → #018762 (versão oficial, fundo claro)
//   white    → #FFFFFF (fundo escuro)
//   black    → #212121 (monocromático)
//   gradient → gradient-secondary (#008392 → #00BC86)
// ─────────────────────────────────────────────────────────────

type LogoVariant = 'horizontalTotal' | 'horizontal' | 'vertical' | 'symbol'
type LogoColor   = 'green' | 'white' | 'black' | 'gradient'

interface LogoProps {
  variant?:  LogoVariant
  color?:    LogoColor
  width?:    number
  height?:   number
  className?: string
  title?:    string
}

// Cores semânticas
const COLORS = {
  green:    { symbol: '#018762', text: '#018762' },
  white:    { symbol: '#FFFFFF', text: '#FFFFFF' },
  black:    { symbol: '#212121', text: '#212121' },
  gradient: { symbol: 'url(#ls-grad)', text: '#018762' },
}

// ── Símbolo LS (path aproximado fiel ao Figma) ───────────────
// O "L" tem cantos arredondados e o "S" tem curvas características
function SymbolPath({ fill }: { fill: string }) {
  return (
    <g>
      {/* Forma do L */}
      <path
        d="M4 4 C4 1.8 5.8 0 8 0 L18 0 C20.2 0 22 1.8 22 4 L22 8 C22 10.2 20.2 12 18 12 L12 12 L12 20 C12 22.2 10.2 24 8 24 L4 24 C1.8 24 0 22.2 0 20 L0 8 C0 5.8 1.8 4 4 4 Z"
        fill={fill}
      />
      {/* Forma do S */}
      <path
        d="M26 0 L38 0 C40.2 0 42 1.8 42 4 L42 8 C42 10.2 40.2 12 38 12 L30 12 C27.8 12 26 13.8 26 16 L26 20 C26 22.2 27.8 24 30 24 L42 24 C42 24 42 28 38 28 L26 28 C23.8 28 22 26.2 22 24 L22 20 C22 17.8 23.8 16 26 16 L34 16 C36.2 16 38 14.2 38 12 L38 8 C38 5.8 36.2 4 34 4 L26 4 Z"
        fill={fill}
      />
    </g>
  )
}

// ── Gradiente def ────────────────────────────────────────────
function GradientDef() {
  return (
    <defs>
      <linearGradient id="ls-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#008392" />
        <stop offset="100%" stopColor="#00BC86" />
      </linearGradient>
    </defs>
  )
}

// ────────────────────────────────────────────────────────────
export function Logo({
  variant  = 'horizontal',
  color    = 'green',
  width,
  height,
  className,
  title = 'Lacrei Saúde',
}: LogoProps) {
  const { symbol: symFill, text: textFill } = COLORS[color]
  const needsGrad = color === 'gradient'

  // ── horizontalTotal: símbolo + "Lacrei Saúde" em linha ──
  if (variant === 'horizontalTotal') {
    const w = width  ?? 202
    const h = height ?? 24
    // escala o símbolo (28px alto original → h)
    const scale = h / 28
    const symW  = Math.round(44 * scale)  // largura do símbolo
    const gap   = Math.round(10 * scale)  // espaço entre símbolo e texto
    const fontSize = Math.round(h * 0.78)

    return (
      <svg
        width={w} height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label={title}
        className={className}
      >
        {needsGrad && <GradientDef />}
        <title>{title}</title>

        {/* Símbolo escalado */}
        <g transform={`scale(${scale})`}>
          <SymbolPath fill={symFill} />
        </g>

        {/* "Lacrei Saúde" em uma linha */}
        <text
          x={symW + gap}
          y={h * 0.82}
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="'Nunito', 'Inter', sans-serif"
          fill={textFill}
          letterSpacing="-0.3"
        >
          Lacrei Saúde
        </text>
      </svg>
    )
  }

  // ── horizontal: símbolo + "Lacrei\nSaúde" em duas linhas ──
  if (variant === 'horizontal') {
    const w = width  ?? 120
    const h = height ?? 48
    const scale   = (h * 0.9) / 28
    const symW    = Math.round(44 * scale)
    const gap     = Math.round(10 * scale)
    const fontSize = Math.round(h * 0.30)
    const lineH   = fontSize * 1.15
    const textY1  = h / 2 - lineH * 0.1
    const textY2  = textY1 + lineH

    return (
      <svg
        width={w} height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label={title}
        className={className}
      >
        {needsGrad && <GradientDef />}
        <title>{title}</title>

        <g transform={`translate(0, ${(h - 28 * scale) / 2}) scale(${scale})`}>
          <SymbolPath fill={symFill} />
        </g>

        <text
          x={symW + gap}
          y={textY1}
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="'Nunito', 'Inter', sans-serif"
          fill={textFill}
        >
          Lacrei
        </text>
        <text
          x={symW + gap}
          y={textY2}
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="'Nunito', 'Inter', sans-serif"
          fill={textFill}
        >
          Saúde
        </text>
      </svg>
    )
  }

  // ── vertical: símbolo acima + texto abaixo ──
  if (variant === 'vertical') {
    const w = width  ?? 80
    const h = height ?? 88
    const symSize = w * 0.7
    const scale   = symSize / 44
    const symH    = 28 * scale
    const gap     = 10
    const fontSize = Math.round(w * 0.22)
    const lineH   = fontSize * 1.2
    const symX    = (w - 44 * scale) / 2
    const text1Y  = symH + gap + fontSize
    const text2Y  = text1Y + lineH

    return (
      <svg
        width={w} height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label={title}
        className={className}
      >
        {needsGrad && <GradientDef />}
        <title>{title}</title>

        <g transform={`translate(${symX}, 0) scale(${scale})`}>
          <SymbolPath fill={symFill} />
        </g>

        <text
          x={w / 2} y={text1Y}
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="'Nunito', 'Inter', sans-serif"
          fill={textFill}
        >
          Lacrei
        </text>
        <text
          x={w / 2} y={text2Y}
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="'Nunito', 'Inter', sans-serif"
          fill={textFill}
        >
          Saúde
        </text>
      </svg>
    )
  }

  // ── symbol: só o símbolo ──
  const w = width  ?? 40
  const h = height ?? 40
  const scale = Math.min(w, h) / 44

  return (
    <svg
      width={w} height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label={title}
      className={className}
    >
      {needsGrad && <GradientDef />}
      <title>{title}</title>
      <g transform={`translate(${(w - 44 * scale) / 2}, ${(h - 28 * scale) / 2}) scale(${scale})`}>
        <SymbolPath fill={symFill} />
      </g>
    </svg>
  )
}

// Alias para o símbolo isolado
export function LogoSymbol({
  color = 'green',
  size  = 40,
  className,
}: {
  color?:    LogoColor
  size?:     number
  className?: string
}) {
  return (
    <Logo
      variant="symbol"
      color={color}
      width={size}
      height={size}
      className={className}
    />
  )
}