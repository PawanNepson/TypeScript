import React from 'react'
type LisAProps = {
    value: {
        first: string
        last: string
    }[]
}
export const ListAObject = (props: LisAProps) => {
    console.log(props)
    return (
        <div>{props.value.map((value) => {
            return (
                <div key={value.first}>
                    {value.first}


                </div>
            )
        })}</div>
    )
}
