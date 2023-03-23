import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { BrowserRouter } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: { main: "#003688", dark: "#00255f" },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
