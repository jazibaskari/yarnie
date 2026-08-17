export type StitchType = 'knit' | 'purl'

export interface StitchCellData {
  color: string
  stitch: StitchType
}

export type ChartGrid = StitchCellData[][]

export interface YarnColor {
  id: string
  name: string
  hex: string
  brand?: string
  line?: string
  /** Hotlinked to the brand's own CDN — never copied into this repo. */
  imageUrl?: string
  /** Original product page, for attribution. */
  sourceUrl?: string
}
