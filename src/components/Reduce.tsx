import { useReducer } from "react";
type S = {
    count: number;
}
type A = {
    type: "inc" | "dec";
    payload: number
}
const initialValue = {
    count: 0
}
function reducer(state: S, action: A) {
    console.log(state, action)
    switch (action.type) {
        case "inc":
            return { count: state.count + action.payload }
        case "dec":
            return { count: state.count - action.payload }
    }

}
export const Reduce = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <button onClick={() => dispatch({ type: "inc", payload: 10 })}>+</button>
            <button onClick={() => dispatch({ type: "dec", payload: 10 })}>-</button>
            <p>{state.count}</p>
        </div>
    )
}





// import { useReducer } from "react"

// type CounterState = {
//     count: number
// }

// type UpdateAction = {
//     type: "increment" | "decrement"
//     payload: number
// }

// type ResetAction = {
//     type: "reset"
// }

// type CounterAction = UpdateAction | ResetAction

// const initialState = { count: 0 }

// function reducer(state: CounterState, action: CounterAction) {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + action.payload }
//         case "decrement":
//             return { count: state.count - action.payload }
//         case "reset":
//             return initialState
//         default:
//             return state
//     }
// }

// export const Reduce = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <>
//             Count: {state.count}
//             <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
//                 Increment 10
//             </button>
//             <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
//                 Decrement 10
//             </button>
//             <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//         </>
//     )
// }