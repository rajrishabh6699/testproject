import React, { useState } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function () {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  const authenticateUser = async () => {
    try {
      const { data } = await axios.post(
        'https://jobs-api.squareboat.info/api/v1/auth/login',
        {
          ...{
            email,
            password
          }
        }
      );
      if (data.success) return data.data.token;
      return null;
    } catch (error) {
      console.error('Error logging: ', error);
      return null;
    }
  };

  const formHandler = e => {
    e.preventDefault();
    authenticateUser().then(data => {
      if (data) {
        setAuthToken(data);
        history.push('/jobs');
      } else {
        setAuthToken(null);
        setHasError(true);
      }
    });
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                style={{ borderColor: hasError && 'red' }}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                style={{ borderColor: hasError && 'red' }}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                autoComplete="off"
              />
            </div>
            {hasError && (
              <p style={{ color: 'red', width: '100%', textAlign: 'right' }}>
                Incorrect email or password
              </p>
            )}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={formHandler}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
