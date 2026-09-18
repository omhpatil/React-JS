function Practice3() {
    const names = ["Om", "Shiv", "Jay", "Jagdish"];
    return (
        <>
        {
            names.map((name,index)=>
                <p>{index+1} : {name}</p>
            )
        }
        </>
    )
}

export default Practice3