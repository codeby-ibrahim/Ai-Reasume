import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import SigninPage from './auth/sign-in/index.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'
import HomePage from './homepage/index.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element: <App />,
    children: [

      {
        path: '/dashboard',
        element: <dashboard />
      },
      {
        path: '/',
        element: <HomePage />
      },

    ]
  },
  {
    path: 'auth/sign-in',
    element: <SigninPage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
