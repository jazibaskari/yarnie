import type { StitchCellData } from '../types/chart'

interface StitchCellProps {
  data: StitchCellData
  size?: number
  onPaint?: () => void
}

const CELL_SIZE_DEFAULT = 24

export default function StitchCell({ data, size = CELL_SIZE_DEFAULT, onPaint }: StitchCellProps) {
  const symbolStroke = isLight(data.color) ? '#00000033' : '#ffffff77'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onMouseDown={onPaint}
      onMouseEnter={(event) => {
        if (event.buttons === 1) onPaint?.()
      }}
      style={{ cursor: 'pointer', display: 'block' }}
      role="gridcell"
      aria-label={`${data.stitch} stitch, ${data.color}`}
    >
      <rect x={0} y={0} width={24} height={24} fill={data.color} stroke="#00000014" />
      {data.stitch === 'knit' ? (
        <path
          d="M4 6 L12 18 L20 6"
          fill="none"
          stroke={symbolStroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <line x1={5} y1={12} x2={19} y2={12} stroke={symbolStroke} strokeWidth={2.5} strokeLinecap="round" />
      )}
    </svg>
  )
}

// Knit/purl are always rendered from this fixed symbol set, tinted per cell —
// never derived from an input photo.
function isLight(hex: string): boolean {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6
}
