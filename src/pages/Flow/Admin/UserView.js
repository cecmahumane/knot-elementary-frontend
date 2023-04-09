import React from 'react';
import { Card, Button } from 'flowbite-react'
import { HiXMark } from 'react-icons/hi'
import { useAuth0 } from '@auth0/auth0-react';
import { CardComponent } from './CardComponent';
import LogoutButton from '../../../components/LogoutButton';

export const UserView = () => {
  // function to delete user
  const deleteUser = () => {
  }
  return (
    <div className=''>
      <CardComponent/>
      <div>
        <Button className="static cursor-pointer">
          <span className=''>
            {/* <HiXMark /> */}Allo Allo
          </span>
        </Button>
        <LogoutButton/>
      </div>
    </div>
  );
}