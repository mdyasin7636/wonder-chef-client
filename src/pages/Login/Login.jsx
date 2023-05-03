import React from 'react';

const Login = () => {
    return (
        <div className="text-center">
            <h2>Login here</h2>
            <form className="border rounded border-teal-500 m-20 p-20">
        <div>
          <p>Email:</p>
          <input type="email" name="email" className="bg-gray-600 text-zinc-50" required />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password" className="bg-gray-600 text-zinc-50" required />
        </div>
        <button className="btn btn-primary mt-2">Login</button>
      </form>
        </div>
    );
};

export default Login;