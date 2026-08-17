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
          title={color.name}
          aria-label={color.name}
          aria-selected={selected === color.hex}
          role="option"
          onClick={() => onSelect(color.hex)}
          style={{
            width: 32,
            height: 32,
            padding: 0,
            borderRadius: 6,
            background: color.hex,
            border: selected === color.hex ? '2px solid #2b2620' : '1px solid #00000022',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  )
}
