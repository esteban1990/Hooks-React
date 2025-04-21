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
import { Layout } from './useLayoutEffect/Layout'
import { Memorize } from './memos/Memorize'
import { MemoHook } from './memos/MemoHook'
import { CallbackHook } from './memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Padre/>

  // {/* </StrictMode>, */}
)
