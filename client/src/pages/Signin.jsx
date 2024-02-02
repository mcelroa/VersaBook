import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/signin", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.code === 1) {
          navigate("/dashboard");
        } else {
          setError(res.data.message);
        }
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
              <label htmlFor="">Email</label>
              <input type="email" ref={emailRef} />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input type="password" ref={passwordRef} />
            </div>
            <button className="sign-in">Sign In</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
