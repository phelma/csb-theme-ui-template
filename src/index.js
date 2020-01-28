/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import ReactDOM from 'react-dom'
import './global-styles.css'
import theme from './theme'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
)
