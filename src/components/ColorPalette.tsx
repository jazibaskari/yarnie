import type { YarnColor } from '../types/chart'

interface ColorPaletteProps {
  colors: YarnColor[]
  selected: string
  onSelect: (hex: string) => void
}

export default function ColorPalette({ colors, selected, onSelect }: ColorPaletteProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }} role="listbox" aria-label="Yarn colors">
      {colors.map((color) => (
        <button
          key={color.id}
          title={color.brand ? `${color.brand} ${color.line ?? ''} — ${color.name}`.trim() : color.name}
          aria-label={color.name}
          aria-selected={selected === color.hex}
          role="option"
          onClick={() => onSelect(color.hex)}
          style={{
            width: 40,
            height: 40,
            padding: 0,
            borderRadius: 6,
            overflow: 'hidden',
            background: color.hex,
            border: selected === color.hex ? '2px solid #2b2620' : '1px solid #00000022',
            cursor: 'pointer',
          }}
        >
          {color.imageUrl ? (
            <img
              src={color.imageUrl}
              alt={color.name}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(event) => {
                // Fall back to the sampled hex swatch if the brand's CDN image fails to load.
                event.currentTarget.style.display = 'none'
                event.currentTarget.parentElement!.style.background = color.hex
              }}
            />
          ) : null}
        </button>
      ))}
    </div>
  )
}
