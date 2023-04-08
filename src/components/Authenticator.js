import React from 'react'
import { useAuth0 } from '@auth0/auth0-react' 

const Authenticator = () => {
    const {user, isLoading} = useAuth0();
    const [fetchedRole, setFetchedRole] = React.useState('')

    const fetchRoleData = async () => {
        const response = await fetch(`${process.env.REACT_APP_ORIGIN}/role`, {
            method: 'GET',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json()
        console.log(data)
        setFetchedRole(data);
    }



    React.useEffect(() => {
        fetchRoleData();
    }, [])

    if (isLoading) {
        return <div>Authenticating as we speak...</div>
    }

    if (fetchedRole && fetchedRole === 1) {
        
    }

    return (
        <div>Authenticator

        </div>
    )
}

export default Authenticator