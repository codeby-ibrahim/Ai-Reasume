import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useClerk();

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loader until Clerk finishes loading
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
