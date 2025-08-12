import { useState } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import Header from './components/custam/Header';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useClerk();

  // Wait for Clerk to finish loading
  if (!isLoaded) {
    return (
      <div>
        <h1 className="font-bold text-yellow-400">Loading...</h1>
      </div>
    );
  }

  // Redirect to sign-in page if not signed in
  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // Show protected content
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
