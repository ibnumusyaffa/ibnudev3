import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.bodyFontFamily = ["Source Sans Pro"]
kirkhamTheme.baseLineHeight = 1.8
kirkhamTheme.baseFontSize = "15px"
const typography = new Typography(kirkhamTheme)



export default typography
export const rhythm = typography.rhythm
