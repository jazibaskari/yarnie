import GridEditor from './components/GridEditor'
import { lionBrandPalette } from './data/lionBrandPalette'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Yarnie</h1>
        <p>Colorwork chart POC — paint the grid and it renders as real knit/purl stitches.</p>
      </header>
      <main>
        <GridEditor colors={lionBrandPalette} />
      </main>
    </div>
  )
}
