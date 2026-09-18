function Practice2() {
    const names = ['John', 'Jane', 'Alice', 'Bob'];
    const result = names.map((name) => (
        <ul>
            <li>{name}</li>
        </ul>
    ))

    return (
        <>
            {result}
        </>
    )
}

export default Practice2


// orelse if u want to write code inside return then u need to write inside the {} 