import { useState } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useClerk();

  if (!isLoaded) {
    return <div>
      <h1 className='font-bold text-yellow-400'>

        Lodding

      </h1>
    </div>;
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
