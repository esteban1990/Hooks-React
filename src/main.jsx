import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHooks'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <FocusScreen/>

  // {/* </StrictMode>, */}
)
