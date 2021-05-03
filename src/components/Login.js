import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function Login ({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleChange(e) {
        // console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
    e.preventDefault();
    // request => POST /login
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
        <div>
          <form onSubmit={handleSubmit} >
            <h1 className="letter"> Login</h1>
            <label className="letter"> Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label className="letter" >Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
    
            {errors.map((error) => (
              <p key={error} style={{ color: "red" }}>
                {error}
              </p>
            ))}

            <input type="submit" value="Login" />
          </form>
        </div>
    );
}

export default Login