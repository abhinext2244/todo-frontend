import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import  AppProviders   from "./contextApi/AppProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <AppProviders>
    <App />
    <Toaster/>
  </AppProviders>
    </BrowserRouter>
  </StrictMode>,
)
