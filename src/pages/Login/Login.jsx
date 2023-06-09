import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset();
            console.log(loggedUser);
            navigate(from);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
              Don't Have an Account? <Link className='link' to="/register">Register</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Login</button>
            </div>
          </form>
        </div>
        <div className='space-x-4 mt-4'>
        <button onClick={handleGoogleSignIn} className='btn btn-outline'>Login With Google</button>
        <button onClick={handleGithubSignIn} className='btn btn-outline'>Login With Github</button>
        </div>
        <p>{error}</p>
      </div>
    </div>
    );
};

export default Login;