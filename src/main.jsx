import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/:countryName' element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
