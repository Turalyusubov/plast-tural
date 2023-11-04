import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './context/AppContext.jsx';
import './18n'
import ScrollToTop from "./components/ScrollToTop"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
