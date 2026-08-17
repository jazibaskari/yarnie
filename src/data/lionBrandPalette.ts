import type { YarnColor } from '../types/chart'

const PRODUCT_PAGE = 'https://www.lionbrand.com/products/vannas-choice-yarn'
const BRAND = 'Lion Brand'
const LINE = "Vanna's Choice"

// Colorway names and photos are Lion Brand's own product data (Vanna's
// Choice line), linked directly to their CDN rather than copied into this
// repo. `hex` is not an official brand value — it's the dominant color
// sampled from each linked photo, used to drive the stitch renderer.
export const lionBrandPalette: YarnColor[] = [
  { id: 'cranberry', name: 'Cranberry', hex: '#53030b', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-180_160x.jpg' },
  { id: 'fisherman', name: 'Fisherman', hex: '#a58e82', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-098_160x.jpg' },
  { id: 'navy', name: 'Navy', hex: '#0a1626', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-110_160x.jpg' },
  { id: 'dusty-blue', name: 'Dusty Blue', hex: '#5c6e78', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-108_160x.jpg' },
  { id: 'kelly-green', name: 'Kelly Green', hex: '#436028', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-172_160x.jpg' },
  { id: 'sage', name: 'Sage', hex: '#395b56', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-177_160x.jpg' },
  { id: 'terracotta', name: 'Terracotta', hex: '#d13d19', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-134_160x.jpg' },
  { id: 'rust', name: 'Rust', hex: '#c14d18', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-135_160x.jpg' },
  { id: 'mustard', name: 'Mustard', hex: '#d9b052', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-158_160x.jpg' },
  { id: 'dusty-rose', name: 'Dusty Rose', hex: '#9a6c5d', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/860-140_160x.jpg' },
  { id: 'chocolate', name: 'Chocolate', hex: '#3e3026', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-126_160x.jpg' },
  { id: 'black', name: 'Black', hex: '#06080e', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-153_160x.jpg' },
  { id: 'taupe', name: 'Taupe', hex: '#614e41', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-125_160x.jpg' },
  { id: 'dark-grey-heather', name: 'Dark Grey Heather', hex: '#ad9c98', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/files/SK-860-404_160x.jpg' },
  { id: 'burgundy', name: 'Burgundy', hex: '#2c0b19', brand: BRAND, line: LINE, sourceUrl: PRODUCT_PAGE, imageUrl: 'https://www.lionbrand.com/cdn/shop/products/SK-860-148_160x.jpg' },
]
