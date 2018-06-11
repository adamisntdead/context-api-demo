import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from './components/Context'

import './styles.css'

const AppWithProvider = () => (
  <Provider>
    <App />
  </Provider>
)

ReactDOM.render(<AppWithProvider />, document.getElementById('root'))
