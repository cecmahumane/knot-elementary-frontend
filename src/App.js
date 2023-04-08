import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Authenticator from './components/Authenticator';

import Calendar from './components/Calendar/calendar'


import Admin from './pages/Flow/Admin'

function App() {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  // const [fetchedRole, setFetchedRole] = React.useState('')

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/authenticator')
    }
  }, [isAuthenticated])
  
  if (isLoading) return <div>Loading...</div>;


  return (
    <>
      <LoginButton />
      <LogoutButton />
      {/* <Authenticator/> */}

      {/* <Profile />
      <Landing /> */}

      {/* <Admin/>
    <Calendar/> */}

    {/* {user.email} */}
      

      {isAuthenticated.email}

    </>
  );
}

export default App;