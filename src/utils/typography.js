import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.bodyFontFamily = ["Source Sans Pro"]
kirkhamTheme.baseLineHeight = 1.8
const typography = new Typography(kirkhamTheme)

// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: ,
//   headerFontFamily: ["Playfair display"],
//   bodyFontFamily: ["Source Sans Pro", "serif"],
// })

export default typography
export const rhythm = typography.rhythm
