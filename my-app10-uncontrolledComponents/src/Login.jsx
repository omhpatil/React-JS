function Login() {

    function handleSubmit(e) {

        e.preventDefault();

        console.log(e.target.email.value);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                name="email"
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;