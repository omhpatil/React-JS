import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState("example@example.com");
    const [password, setPassword] = useState("pwd@123");

    return (
        <div>

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

        </div>
    );
}

export default Login