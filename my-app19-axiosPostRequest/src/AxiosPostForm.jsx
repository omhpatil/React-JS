import React, { useState } from "react";
import axios from "axios";

function AxiosPostForm() {

    const data = {
        fname: "",
        lname: ""
    };

    const [inputData, setInputData] = useState(data);

    const handleData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(
                "https://jsonplaceholder.typicode.com/users",
                inputData
            )
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <>
            <label>First Name : </label>

            <input
                type="text"
                name="fname"
                value={inputData.fname}
                onChange={handleData}
            />

            <br />
            <br />

            <label>Last Name : </label>

            <input
                type="text"
                name="lname"
                value={inputData.lname}
                onChange={handleData}
            />

            <br />
            <br />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </>
    );
}

export default AxiosPostForm;