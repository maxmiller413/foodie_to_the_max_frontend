import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SignUp.module.css"

function SignUp ({ setCurrentUser, handleSignUpClick }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    console.log(errors)

    const { username, password } = formData;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        // TODO: sign up as a new user
        // request => POST /signup
         
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    localStorage.setItem("userId", data.id)
                    setCurrentUser(data)
                    handleSignUpClick()
                    history.push("/")
                }
            })
            // .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             return response.json().then((data) => {
        //             throw data;
        //             });
        //         }
        //     })
        //     .then((data) => {
        //         // set the user in state
        //         setCurrentUser(data.user);
        //         // save the token!
        //         localStorage.setItem("token", data.token);
        //         // redirect
        //         history.push("/");
        //     })
        //     .catch((data) => {
        //         setErrors(data.errors);
        // });
    }
    

    return(
        <div className={`styles['login-div'] container`}>
            <form onSubmit={handleSubmit} value='' className={`field has-addons ${styles.login}`}>

            <p className='control'>
                <button className="button is-static is-medium"> Username </button>
            </p>

            <p className="control">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className={`input is-medium ${styles['input-control']}`}
                />
            </p>

            <div className='control'>
              <div className="button is-static is-medium "> 
                Password 
              </div>
            </div>

            <p className="control">
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className={`input is-medium ${styles['input-control']}`}
                />
            </p>
                {errors.map((error) => (
                    <p key={error} style={{ color: "red" }}>
                    {error}
                    </p>
                ))}

            <button className={`button is-medium ${styles['search-button']}`}>
              <span className="icon is-small">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </button>

            </form>
        </div>
    )
}

export default SignUp