import type { ChartGrid, StitchCellData } from '../types/chart'

const DEFAULT_CELL: StitchCellData = { color: '#e8e2d8', stitch: 'knit' }

export function createEmptyGrid(rows: number, cols: number): ChartGrid {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ ...DEFAULT_CELL })),
  )
}

export function setCell(
  grid: ChartGrid,
  row: number,
  col: number,
  data: Partial<StitchCellData>,
): ChartGrid {
  return grid.map((r, ri) =>
    r.map((cell, ci) => (ri === row && ci === col ? { ...cell, ...data } : cell)),
  )
}

export function resizeGrid(grid: ChartGrid, rows: number, cols: number): ChartGrid {
  const next = createEmptyGrid(rows, cols)
  for (let r = 0; r < Math.min(rows, grid.length); r++) {
    for (let c = 0; c < Math.min(cols, grid[r].length); c++) {
      next[r][c] = grid[r][c]
    }
  }
  return next
}
