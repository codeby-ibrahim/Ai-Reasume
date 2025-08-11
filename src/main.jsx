import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'auth/sign-in',
    element: <siginpage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvder router={router} />
  </StrictMode>,
)
