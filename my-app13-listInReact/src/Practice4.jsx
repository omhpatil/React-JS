function Practice4() {
    const students = [
        {
            id: 1,
            name: "Om",
            age: 25
        },
        {
            id: 2,
            name: "Rahul",
            age: 24
        },
        {
            id: 3,
            name: "Amit",
            age: 26
        }
    ];

    return (
        <>
            {students.map(student => (
                <div key={student.id}><br/>
                    <p>{student.name}</p>
                    <p>Age: {student.age}</p>
                </div>
            ))}
        </>
    )
}

export default Practice4