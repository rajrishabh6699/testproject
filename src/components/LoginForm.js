import React from "react"
import './LoginForm.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router"

export default function (props) {
    let history=useHistory();
    const formHandler=()=>{
        history.push('/details')
    }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={formHandler}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
