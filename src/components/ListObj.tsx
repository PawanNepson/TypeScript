import React from 'react'
type ListProps = {
    newVal: {
        first: string
        last: string
    }
}
export const ListObj = (props: ListProps) => {
    return (
        <div>{props.newVal.first}</div>
    )
}
