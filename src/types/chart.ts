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
}
