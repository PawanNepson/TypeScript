import React from 'react'
type StyleProps = {
    styles: React.CSSProperties;
}

export const Nice = (props: StyleProps) => {
    return (
        <div style={props.styles}>Here Comes the sun</div>
    )
}
