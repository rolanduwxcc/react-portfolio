import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Email is invalid');
      } else {
        setErrorMessage('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }


    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section class="container-fluid">
      <br />
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label class="form-label" htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="mb-3" >
          <label class="form-label" htmlFor="email">Email:</label>
          <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="mb-3" >
          <label class="form-label" htmlFor="message">Message:</label>
          <textarea class="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button class="btn-lg btn-primary" data-testid="submitButton" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
