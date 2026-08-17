# yarnie

A web app for crocheters and knitters. Proof of concept: an interactive
colorwork chart editor. Paint a grid with yarn colors and stitch types
(knit/purl) and see it rendered with real knit-stitch shapes.

## How the stitch rendering works

Each grid cell is drawn from a fixed SVG stitch shape (a knit "V" or a purl
bar) tinted with the cell's color. There is no image analysis involved —
the shapes are the same for every chart, only the color changes per cell.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Project structure

- `src/types/chart.ts` — grid/stitch/yarn color types
- `src/utils/grid.ts` — grid creation, resize, and cell update helpers
- `src/components/StitchCell.tsx` — single stitch SVG renderer
- `src/components/ChartGrid.tsx` — renders the full grid of stitch cells
- `src/components/ColorPalette.tsx` — yarn color swatch picker
- `src/components/GridEditor.tsx` — combines the grid, palette, and controls
- `src/hooks/useChartState.ts` — grid state and paint/resize logic
- `src/data/samplePalette.ts` — placeholder yarn color data for the POC

## Notes on data

`samplePalette.ts` is placeholder data for this POC only — generic color
names and hex values, not sourced from any yarn brand's catalog or product
photography. Real catalog sourcing (brand API/affiliate feed vs. user
uploads) is a decision for a future iteration.
