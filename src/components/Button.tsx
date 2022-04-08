import React from 'react'
type ButtonProps = {
    HandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = (props: ButtonProps) => {
    return (
        <div><button onClick={props.HandleClick}>
            click</button></div>
    )
}
