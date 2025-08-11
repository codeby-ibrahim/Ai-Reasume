import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

function App() {
  const [count, setCount] = useState(0);
  const { user, isloaded, isSignedIn } = useClerk();

  if (!isloaded) {
    return <Navigate to={'/uth/sign-in'} />
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
