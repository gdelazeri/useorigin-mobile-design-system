export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'

export type TypographyAlign = 'auto' | 'left' | 'center' | 'right' | 'justify'

export interface TypographyProps {
  children: string
  variant: TypographyVariant
  color?: string
  gutterBottom?: boolean
  align?: TypographyAlign
}