import type { YarnColor } from '../types/chart'
import ChartGrid from './ChartGrid'
import ColorPalette from './ColorPalette'
import { useChartState } from '../hooks/useChartState'

interface GridEditorProps {
  colors: YarnColor[]
}

export default function GridEditor({ colors }: GridEditorProps) {
  const {
    grid,
    selectedColor,
    selectedStitch,
    setSelectedColor,
    setSelectedStitch,
    paintCell,
    addColumns,
    addRows,
  } = useChartState(colors[0]?.hex ?? '#8a5a44')

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <ChartGrid grid={grid} onPaintCell={paintCell} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 220 }}>
        <div>
          <h3 style={{ margin: '0 0 8px' }}>Stitch type</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setSelectedStitch('knit')} disabled={selectedStitch === 'knit'}>
              Knit
            </button>
            <button onClick={() => setSelectedStitch('purl')} disabled={selectedStitch === 'purl'}>
              Purl
            </button>
          </div>
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px' }}>Yarn colors</h3>
          <ColorPalette colors={colors} selected={selectedColor} onSelect={setSelectedColor} />
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px' }}>Grid size</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={addColumns}>+ columns</button>
            <button onClick={addRows}>+ rows</button>
          </div>
        </div>
      </div>
    </div>
  )
}
