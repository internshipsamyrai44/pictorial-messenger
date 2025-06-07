import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DirectWidget from './DirectWidget.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DirectWidget />
  </StrictMode>,
)
