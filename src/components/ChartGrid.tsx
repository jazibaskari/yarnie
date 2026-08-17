import type { ChartGrid as ChartGridData } from '../types/chart'
import StitchCell from './StitchCell'

interface ChartGridProps {
  grid: ChartGridData
  cellSize?: number
  onPaintCell?: (row: number, col: number) => void
}

export default function ChartGrid({ grid, cellSize, onPaintCell }: ChartGridProps) {
  return (
    <div
      role="grid"
      aria-label="Colorwork chart"
      style={{ display: 'inline-block', border: '1px solid #d8d2c4', userSelect: 'none' }}
      onDragStart={(event) => event.preventDefault()}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} role="row" style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => (
            <StitchCell
              key={colIndex}
              data={cell}
              size={cellSize}
              onPaint={() => onPaintCell?.(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
