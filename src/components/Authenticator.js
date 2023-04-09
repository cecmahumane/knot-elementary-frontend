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
        // console.log(data)
        setFetchedRole(data);
    }

    const emailCheck = () => {
        let role;
        let personId;
        for (let i = 0; i < fetchedRole.length; i++) {
            if (fetchedRole[i].email === user.email) {
                role = fetchedRole[i].role_id;
                personId = fetchedRole[i].id;
                if (role === 1) {
                    navigate('/admin')
                } else if(role === 2) {
                    navigate(`/teacher/${personId}`)
                } else if (role === 3) {
                    navigate(`/parent/${personId}`)
                } else {
                    navigate(`/credentials`)
                }
                return console.log("User exists in db");
            }
        }
        return console.log("User doesn't exist in db")
    }

    React.useEffect(() => {
        if (user) {
            fetchRoleData();
        }
        if (fetchedRole) {
        emailCheck();
        }
    }, [user, fetchedRole])

    if (isLoading) {
        return <div>Authenticating as we speak...</div>
    }

    return (
        <div>Authenticator
            <Test />
            <LogoutButton />
            {user.email} <br />
            {fetchedRole && fetchedRole[3].email}
        </div>
    )
}

export default Authenticator