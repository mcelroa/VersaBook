import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/signup", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>VersaBook</h1>
        </div>
        <div className="form">
          <div className="errorMsg">
            <p>{error}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="">Name</label>
              <input type="text" ref={nameRef} />
            </div>
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input type="email" ref={emailRef} />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input type="password" ref={passwordRef} />
            </div>
            <button className="sign-in">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}
