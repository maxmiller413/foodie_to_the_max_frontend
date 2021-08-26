import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./Login.module.css"

function Login ({ setCurrentUser , handleOnClick}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
    e.preventDefault();
    // *** request => POST /login ***
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
        .then(r => r.json())
        .then(user => {
            localStorage.setItem("userId", user.id)
            setCurrentUser(user)
            handleOnClick()
            history.push("/")
        })

    //     .then((response) => {
    //     if (response.ok) {
    //         return response.json();
    //     } else {
    //         return response.json().then((data) => {
    //         throw data;
    //         });
    //     }
    //     })
    //     .then((data) => {
    //     // set the user in state
    //     setCurrentUser(data.user);
    //     // save the token!
    //     localStorage.setItem("token", data.token);
    //     // redirect!
    //     history.push("/");
    //     })
    //     .catch((data) => {
    //     setErrors(data.errors);
    //     });
        
     }

    return (
        <div className={`styles['login-div'] `}>
          <form onSubmit={handleSubmit} value='' className={`field has-addons ${styles.login}`}>
            
          <p className='control'>
            <button className="button is-static is-medium"> Username </button>
          </p>

          <p className="control">
            <input 
              type="text"
              name="username"
              value={formData.username}
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
              value={formData.password}
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
    );
}

export default Login