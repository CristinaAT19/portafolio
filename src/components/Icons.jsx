const stroke = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const SPARKLE_PATH =
  'M22 2c1.6 12.4 7.6 18.4 20 20-12.4 1.6-18.4 7.6-20 20-1.6-12.4-7.6-18.4-20-20 12.4-1.6 18.4-7.6 20-20Z'

export function Sparkle({ size = 16, outline = false, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill={outline ? 'none' : 'currentColor'}
      stroke={outline ? 'currentColor' : 'none'}
      strokeWidth={1.2}
      className={`shrink-0 text-accent ${className}`}
    >
      <path d={SPARKLE_PATH} />
    </svg>
  )
}

export function ArrowDown({ size = 16 }) {
  return (
    <svg width={size} height={size} {...stroke}>
      <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
    </svg>
  )
}

export function ArrowUp({ size = 16 }) {
  return (
    <svg width={size} height={size} {...stroke}>
      <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
    </svg>
  )
}

export function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} {...stroke}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  )
}
