import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/Default"
import { GlobalStyled } from "./styles/global"
import { Router } from "./Routers"
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>       
        <GlobalStyled />
        <BrowserRouter>
          <CartContextProvider>
              <Router />
          </CartContextProvider>
        </BrowserRouter>
    </ThemeProvider>

    
     
  )
}

export default App
