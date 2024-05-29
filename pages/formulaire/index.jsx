import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/router';
import Footer from '../footer';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqknvon");
  if (state.succeeded) {
      return <p>Votre email est bien partie vers le correspondant</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center'>
  <div className='mb-3 col-md-5'>
    <label htmlFor="email">
      Votre adresse email
    </label>
    <input className="form-control"
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
  </div>
  </div>
  <div className='d-flex justify-content-center '>
    <div className="  mb-3 col-md-5">
        <textarea
          id="message"
          name="message"
          className="form-control" 
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
  </div>
      
      <div className="mb-3 d-flex justify-content-center">
        <button type="submit" className="link text-center mt-3  btn btn-outline-secondary col-md-3" disabled={state.submitting}>
          Envoyez
        </button>
      </div>
      
    </form>
  );
}

function FormPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Formulaire de Contact</h1>
      <ContactForm />
      <div className="d-flex justify-content-center">
        <button
          onClick={handleGoHome}
          className="link text-center mt-3 mb-5 btn btn-outline-secondary col-md-3"
        >
          Accueil
        </button>
      </div>
      <Footer/>
    </div>
   
  ); 
}

export default FormPage;
