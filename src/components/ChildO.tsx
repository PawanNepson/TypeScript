import React from 'react'
type ChildProps = {
    children: React.ReactChild
}
const ChildO = (props: ChildProps) => {
    return (
        <div>{props.children}</div>
    )
}

export default ChildO