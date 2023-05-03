import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="text-center">
      <h2>Register here</h2>
      <form onSubmit={handleRegister} className="border rounded border-teal-500 m-20 p-20">
        <div>
          <p>Name:</p>
          <input type="text" name="name" className="bg-gray-600 text-zinc-50"/>
        </div>
        <div>
          <p>Email:</p>
          <input type="email" name="email" className="bg-gray-600 text-zinc-50" required />
        </div>
        <div>
          <p>Photo URL:</p>
          <input type="text" name="photo" className="bg-gray-600 text-zinc-50" />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password" className="bg-gray-600 text-zinc-50" required />
        </div>
        <button className="btn btn-primary mt-2">Register</button>
        <p>
            Already Have an Account? <Link className='link' to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
