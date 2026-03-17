'use client'

type LogoVariant = 'horizontal' | 'horizontalTotal' | 'vertical'
type LogoColor = 'green' | 'white' | 'black' | 'gradient'

interface LogoProps {
  variant?: LogoVariant
  color?: LogoColor
  width?: number
  height?: number
  className?: string
  title?: string
}

const BRAND_GREEN = '#018762'
const GRADIENT_ID = 'logo-gradient'

export function Logo({
  variant = 'horizontal',
  color = 'green',
  width,
  height,
  className,
  title = 'Lacrei Saúde',
}: LogoProps) {
  const fillColor =
    color === 'green'  ? BRAND_GREEN :
    color === 'white'  ? '#FFFFFF' :
    color === 'black'  ? '#212121' :
    `url(#${GRADIENT_ID})`

  const gradientDef = color === 'gradient' ? (
    <defs>
      <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#008392" />
        <stop offset="100%" stopColor="#00BC86" />
      </linearGradient>
    </defs>
  ) : null

  if (variant === 'horizontalTotal') {
    return (
      <svg
        width={width ?? 144}
        height={height ?? 40}
        viewBox="0 0 144 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
        className={className}
      >
        {gradientDef}
        <title>{title}</title>
        <rect x="0" y="6" width="28" height="28" rx="4" fill={fillColor} />
        <text x="4" y="26" fontSize="18" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">LS</text>
        <text x="36" y="26" fontSize="16" fontWeight="700" fill={fillColor} fontFamily="'Nunito', 'Inter', sans-serif">Lacrei Saúde</text>
      </svg>
    )
  }

  if (variant === 'vertical') {
    return (
      <svg
        width={width ?? 80}
        height={height ?? 88}
        viewBox="0 0 80 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
        className={className}
      >
        {gradientDef}
        <title>{title}</title>
        <rect x="26" y="0" width="28" height="28" rx="4" fill={fillColor} />
        <text x="30" y="20" fontSize="18" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">LS</text>
        <text x="40" y="50" fontSize="14" fontWeight="700" fill={fillColor} fontFamily="'Nunito', 'Inter', sans-serif" textAnchor="middle">Lacrei</text>
        <text x="40" y="68" fontSize="14" fontWeight="700" fill={fillColor} fontFamily="'Nunito', 'Inter', sans-serif" textAnchor="middle">Saúde</text>
      </svg>
    )
  }

  return (
    <svg
      width={width ?? 120}
      height={height ?? 48}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      {gradientDef}
      <title>{title}</title>
      <rect x="0" y="4" width="40" height="40" rx="6" fill={fillColor} />
      <text x="6" y="30" fontSize="20" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">LS</text>
      <text x="50" y="20" fontSize="14" fontWeight="700" fill={fillColor} fontFamily="'Nunito', 'Inter', sans-serif">Lacrei</text>
      <text x="50" y="38" fontSize="14" fontWeight="700" fill={fillColor} fontFamily="'Nunito', 'Inter', sans-serif">Saúde</text>
    </svg>
  )
}

export function LogoSymbol({
  color = 'green',
  size = 40,
  className,
}: {
  color?: LogoColor
  size?: number
  className?: string
}) {
  const fill =
    color === 'green'  ? BRAND_GREEN :
    color === 'white'  ? '#FFFFFF' :
    color === 'black'  ? '#212121' :
    BRAND_GREEN

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lacrei Saúde"
      className={className}
    >
      <title>Lacrei Saúde</title>
      <rect width="40" height="40" rx="6" fill={fill} />
      <text x="4" y="28" fontSize="22" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">LS</text>
    </svg>
  )
}