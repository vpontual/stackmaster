import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup () {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // use mutation here to add user

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);

  // add try catch error for add user and authenticate login
}

  return (

  )
}