import React, { useState } from 'react'
type StateProps = {
    name: string;
    email: string;
}
export const TypeAsertion = () => {
    const [user, setUser] = useState<StateProps>({} as StateProps)
    const LoginHandler = () => {
        setUser({
            name: "Pawan",
            email: "nepsonh@gmailcom"
        })

    }

    return (
        <div>
            <button onClick={LoginHandler}>Login</button>

            <h1>{user.email}</h1>
            <h1>{user.name}</h1>


        </div>
    )
}
