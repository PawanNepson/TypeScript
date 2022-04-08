import React from 'react'
type GreetProps = {
    name: string;
    age: number;
    isLoggedIn: boolean

}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ? `You are${props.name}` : `You are dr  and your age is ${props.age}`
            }
        </div>
    )
}
