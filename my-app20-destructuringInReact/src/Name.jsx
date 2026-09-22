
// By using props

// function Name(props){

//     return(
//         <>
//             {props.fname} {props.lname}
//         </>
//     )
// }

// By destructuring props (no need to use props in this)
function Name({fname, lname}){

    return(
        <>
            {fname} {lname}
        </>
    )
}

export default Name