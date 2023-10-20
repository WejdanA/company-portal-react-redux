import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './index.css'
import { store } from './store'
import App from './App'
import { Company } from './components/Company'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/companies">Go To All Companies</Link>
        <Routes>
          <Route path="/companies" element={<App />} />
          <Route path="/companies/company/:id" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
