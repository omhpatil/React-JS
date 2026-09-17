import React from "react";

function Form() {

    const initialData = {
        name: "",
        email: "",
        password: ""
    };

    const [inputData, setData] = React.useState(initialData);
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...inputData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data:", inputData);

        setSubmitted(true);
    };

    return (
        <>
            {submitted && (
                <h3>
                    Hello {inputData.name}, You've Registered Successfully
                </h3>
            )}

            <form onSubmit={handleSubmit}>

                <div>
                    <h1>Registration Form</h1>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={inputData.name}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={inputData.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={inputData.password}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    );
}

export default Form;