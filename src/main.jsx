import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect.jsx/SimpleForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterWithCustomHook/> */}
    {/* <CounterApp/> */}
    {/* <HooksApp/> */}
    <SimpleForm/>

  </StrictMode>,
)
