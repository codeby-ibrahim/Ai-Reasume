// src/App.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useClerk } from '@clerk/clerk-react';
import Header from './components/custam/Header';

export default function App() {
  const { isLoaded, isSignedIn } = useClerk();
  const location = useLocation();


  if (!isLoaded) {
    return (
      <div>
        <h1 className="font-bold text-yellow-400">Loading...</h1>
      </div>
    );
  }

  // If not signed in, send user to the sign-in page.
  // We pass state.from so you could return them after sign-in if you want.
  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  // Signed-in users see header + any nested route (Outlet)
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
