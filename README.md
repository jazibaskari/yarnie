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
- `src/data/lionBrandPalette.ts` — Lion Brand (Vanna's Choice) colorway data

## Notes on data

`lionBrandPalette.ts` uses real Lion Brand colorway names, and each swatch
links directly to Lion Brand's own product photo on their CDN — the image
files themselves are never downloaded or committed into this repo, only
referenced by URL. The `hex` value isn't an official brand value; it's the
dominant color sampled from each linked photo, used to drive the stitch
renderer. Broader catalog coverage (more colorways/lines, or an official
data source) is a decision for a future iteration.
