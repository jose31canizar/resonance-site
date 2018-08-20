import Typography from 'typography'
// import bootstrapTheme from "typography-theme-bootstrap"
import WordPress from 'typography-theme-wordpress-2011'
WordPress.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  h1: {
    fontFamily: ['Radikal', 'sans-serif'].join(','),
    fontSize: '2rem',
    color: 'hsla(26, 4%, 58%, 0.87)',
    fontWeight: 400
  },
  h2: {
    fontFamily: ['Radikal', 'sans-serif'].join(','),
    letterSpacing: '1rem'
  },
  blockquote: {
    ...adjustFontSizeTo('19px'),
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1)
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
})
const typography = new Typography(WordPress)

export default typography
