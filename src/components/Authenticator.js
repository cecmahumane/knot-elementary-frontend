import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom"
import { Test } from './test'
import LogoutButton from './LogoutButton'

const Authenticator = () => {
    const { user, isLoading } = useAuth0();
    const navigate = useNavigate();
    const [fetchedRole, setFetchedRole] = React.useState('')

    const fetchRoleData = async () => {
        const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/role`, {
            method: 'GET',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json()
        console.log(data)
        setFetchedRole(data);
    }



    React.useEffect(() => {
        if (user) {
        fetchRoleData();
        }
        // if (fetchedRole && fetchedRole === 1) {
        //     navigate('/admin')
        // } else if (fetchedRole === 2) {
        //     navigate(`/teacher/:id`)
        // } else {
        //     navigate(`/parent/:id`)
        // }
    }, [user])

    if (isLoading) {
        return <div>Authenticating as we speak...</div>
    }

    return (
        <div>Authenticator
            <Test/>
            <LogoutButton/>
        </div>
    )
}

export default Authenticator