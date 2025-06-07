import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {DirectWidget} from "./direct-widget/direct-widget.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DirectWidget />
  </StrictMode>,
)
