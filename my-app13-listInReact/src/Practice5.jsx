function Practice5() {
    const users = [
        { id: 1, name: "Om", active: true },
        { id: 2, name: "Rahul", active: false },
        { id: 3, name: "Amit", active: true }
    ];

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>

                    <h4>{user.name}</h4>

                    {user.active && (
                        <span>Active</span>
                    )}

                </div>
            ))}
        </div>
    );
}

export default Practice5