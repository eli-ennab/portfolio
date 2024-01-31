import { style } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  margin: 0
})

export const container = style({
  backgroundColor: 'black',
  height: '100vh'
})