// src/App.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useClerk } from '@clerk/clerk-react';
import Header from './components/custam/Header';

export default function App() {
  // const { isLoaded, isSignedIn } = useClerk();
  const location = useLocation();



  // Signed-in users see header + any nested route (Outlet)
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
