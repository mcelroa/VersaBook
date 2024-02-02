import { Routes, Route, Link } from "react-router-dom";

export default function Signin() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>VersaBook</h1>
        </div>
        <div className="form">
          <form>
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input type="text" />
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
