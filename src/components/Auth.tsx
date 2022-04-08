import React, { useState } from 'react'
type StateProps = {
    name: string;
    email: string;
}
export const Auth = () => {
    const [user, setUser] = useState<StateProps | null>(null)
    const LoginHandler = () => {
        setUser({
            name: "Pawan",
            email: "nepsonh@gmailcom"
        })

    }
    const LogOutHandler = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={LoginHandler}>Login</button>
            <button onClick={LogOutHandler}>LogOut</button>
            <h1>{user?.email}</h1>
            <h1>{user?.name}</h1>


        </div>
    )
}
