import { useState } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import Header from './components/custam/Header';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useClerk();

  if (!isLoaded) {
    return <div>
      <h1 className='font-bold text-yellow-400'>



      </h1>
    </div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
