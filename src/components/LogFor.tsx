import React, { useState } from 'react'

export const LogFor = () => {
    const [login, setLogin] = useState(false)
    const LogInHandler = () => {
        setLogin(true)

    }
    const LogOutHandler = () => {
        setLogin(false)
    }
    return (
        <div>
            <button onClick={LogInHandler}>
                Login In
            </button>
            <button onClick={LogOutHandler}>
                Log Out
            </button>
            <div>You are {login ? `Logged In` : `Logged Out`}</div>
        </div>
    )
}
