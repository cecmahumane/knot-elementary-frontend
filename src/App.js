import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
import Calendar from './pages/calendar'

import Admin from './pages/Flow/Admin'

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>



  return (
    <>
      <LoginButton />
      <LogoutButton />

      {/* <Profile />
      <Landing /> */}

    {/* <Admin/>
    <Calendar/> */}
    {isAuthenticated.email}
      

    </>
  );
}

export default App;