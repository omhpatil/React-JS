// Conditional Rendering in React JS
// 1. If Else Condition
// 2. Element Variables
// 3. Ternery Operator
// 4. Short Circuit Operator

import { useState } from "react";

function AgeValidator() {
    const [isAgeValid, setIsAgeValid] = useState(true)


    // 1. If Else Condition 

    // if(isAgeValid){
    //     return(
    //         <div>You can vote</div>
    //     )
    // }else{
    //     return(
    //         <div>You cannot vote</div>
    //     )
    // }


    // 2. Element Variables

    // let age;
    // if(isAgeValid){
    //     age = <div>You can vote</div>
    // }else{
    //     age = <div>You cannot vote</div>
    // }

    // return(
    //     <>{age}</>
    // )


    // 3. Ternary Operator

    // return (
    //     <>
    //         { isAgeValid ? <div>You can vote</div> : <div>You cannot vote</div> }
    //     </>
    // )


    // 4. Short Circuit Operator (you can only write if condition in this)

    return (
        <>
            { isAgeValid && <div>You can vote</div> }
        </>
    )


}

export default AgeValidator