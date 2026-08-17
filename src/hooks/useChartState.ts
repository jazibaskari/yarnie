import { useCallback, useState } from 'react'
import type { ChartGrid, StitchType } from '../types/chart'
import { createEmptyGrid, resizeGrid, setCell } from '../utils/grid'

const DEFAULT_ROWS = 20
const DEFAULT_COLS = 20
const RESIZE_STEP = 4

export function useChartState(initialColor: string) {
  const [grid, setGrid] = useState<ChartGrid>(() => createEmptyGrid(DEFAULT_ROWS, DEFAULT_COLS))
  const [selectedColor, setSelectedColor] = useState(initialColor)
  const [selectedStitch, setSelectedStitch] = useState<StitchType>('knit')

  const paintCell = useCallback(
    (row: number, col: number) => {
      setGrid((g) => setCell(g, row, col, { color: selectedColor, stitch: selectedStitch }))
    },
    [selectedColor, selectedStitch],
  )

  const addColumns = useCallback(() => {
    setGrid((g) => resizeGrid(g, g.length, g[0].length + RESIZE_STEP))
  }, [])

  const addRows = useCallback(() => {
    setGrid((g) => resizeGrid(g, g.length + RESIZE_STEP, g[0].length))
  }, [])

  return {
    grid,
    selectedColor,
    selectedStitch,
    setSelectedColor,
    setSelectedStitch,
    paintCell,
    addColumns,
    addRows,
  }
}
