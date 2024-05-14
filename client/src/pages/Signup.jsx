import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import useMatation from apollo here
// import mutuation from utils here

// import authentication here

export default function SignUp() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // use mutation here to add user

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });

    // reset error when user types
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    let valid = true;

    // validate username field
    if (!formState.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is required',
      }));
      valid = false;
    }

    // validate email field
    if (!formState.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    } else if (
      !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(
        formState.email.trim()
      )
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      valid = false;
    }

    if (!formState.password.trim()) {
      // validate password field
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      valid = false;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(formState.password)
    ) {
      // validate password format
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          'Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long',
      }));
      valid = false;
    }

    // valid form
    if (valid) {
      console.log('Form submitted:', formState);

      // reset form after submission
      setFormState({
        username: '',
        email: '',
        password: '',
      });
    }

    // add try catch error for add user and authenticate login
  };

  return (
    <main className="flex justify-center mb-4">
      <div className="w-full lg:w-10/12">
        <div className="bg-white shadow-md">
          <h4 className="bg-dark text-white py-2 px-4">Sign Up</h4>
          <div className="p-4">
            {/* add ternary operator here with data and then load choices with Link */}
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
              {errors.username && (
                <div className="text-red-500">{errors.username}</div>
              )}
              <input
                className="w-full py-2 px-4 mt-4 border rounded-lg"
                id="emailInput"
                placeholder="Enter email"
                name="email"
                type="text"
                value={formState.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
              <input
                className="w-full py-2 px-4 mt-4 border rounded-lg"
                id="passwordInput"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
              <button
                className="w-full py-2 bg-blue-500 text-white rounded-lg cursor-pointer mt-4"
                type="submit"
              >
                Submit
              </button>
            </form>
            {/* add error message here */}
          </div>
        </div>
      </div>
    </main>
  );
}
