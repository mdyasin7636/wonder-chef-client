import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="text-center">
            <h2>Login here</h2>
            <form onSubmit={handleLogin} className="border rounded border-teal-500 m-20 p-20">
        <div>
          <p>Email:</p>
          <input type="email" name="email" className="bg-gray-600 text-zinc-50" required />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password" className="bg-gray-600 text-zinc-50" required />
        </div>
        <button className="btn btn-primary mt-2">Login</button>
        <p>
            Don't Have an Account? <Link className='link' to="/register">Register</Link>
        </p>

        <div className='mt-4'>
        <button className='btn btn-primary mx-4'>Login With Google</button>
        <button className='btn btn-primary'>Login With Github</button>
      </div>

      </form>
        </div>
    );
};

export default Login;