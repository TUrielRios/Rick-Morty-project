import React, { useState } from 'react';
import validation from '../Validation/validation.js';
import styles from './form.module.css'

export default function Form(props) {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    const validationErrors = validation({ ...userData, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData);
  }

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p>{errors.email ? errors.email : null}</p>
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p>{errors.password ? errors.password : null}</p>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

