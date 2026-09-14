import {memo } from 'react'

function ChildA({Learning, add}) {
    console.log("ChildA component rendered")
    return(
        <>
        </>
    )
}

export default memo(ChildA)