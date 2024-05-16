import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [login, { data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    // reset error when user types
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let valid = true;

    // validate username field
    if (!formState.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is required',
      }));
      valid = false;
    }

    // validate password format
    if (!formState.password.trim()) {
      // validate password field
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      valid = false;
    }

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (event) {
      console.error(event);
    }

    // valid form
    if (valid) {
      // reset form after login
      setFormState({
        username: '',
        password: '',
      });
    }
  };

  // If user is logged in, redirect to choice page
  if (Auth.loggedIn()) {
    return <Navigate to="/choice" />;
  }

  return (
    <main className="flex justify-center mb-4">
      <div className="w-full lg:w-10/12">
        <div>
          <div className="p-4">
            {data ? (
              <p>
                <Navigate to="/choice" />
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="w-full py-2 px-4 mt-4 border rounded-lg"
                  id="nameInput"
                  placeholder="Enter username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                {errors.username && <div className="text-red-500">{errors.username}</div>}
                <input
                  className="w-full py-2 px-4 mt-4 border rounded-lg"
                  id="passwordInput"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="text-red-500">{errors.password}</div>}
                <button className="w-full py-2 text-white rounded-lg cursor-pointer mt-4" type="submit">
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
