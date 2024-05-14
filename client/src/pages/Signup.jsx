import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import useMatation from apollo here
// import mutuation from utils here

// import authentication here

export default function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // use mutation here to add user

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    // reset error when user types
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    let valid = true;

    // validate name field
    if (!formState.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
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

    // add try catch error for add user and authenticate login
  };

  return <div>hello</div>;
}
