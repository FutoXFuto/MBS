// client/src/theme.js
import { extendTheme } from "@yamada-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e3f2f9",
      500: "#3182ce",
    },
  },
  fonts: {
    heading: "Noto Sans JP, sans-serif",
    body: "Noto Sans JP, sans-serif",
  },
})

export default theme
