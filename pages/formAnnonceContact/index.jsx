import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/router';
import Footer from '../footer';

function FormAnonceContact() {
  const [state, handleSubmit] = useForm("mnqknvon");
  const router = useRouter();

  // Extraire les informations de l'annonce de l'URL
  const { annonceId, brand, model } = router.query;

  if (state.succeeded) {
    // Redirection vers la liste des annonces après un envoi réussi
    router.push('/annonces');
    return <p>Votre email est bien parti vers le correspondant. Vous allez être redirigé...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center'>
        <div className='mb-3 col-md-5'>
          <label htmlFor="email">Votre adresse email</label>
          <input className="form-control" id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="mb-3 col-md-5">
          <textarea id="message" name="message" className="form-control" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </div>

      {/* Champs cachés pour les informations de l'annonce */}
      <input type="hidden" name="annonceId" value={annonceId || ''} />
      <input type="hidden" name="brand" value={brand || ''} />
      <input type="hidden" name="model" value={model || ''} />

      <div className="mb-3 d-flex justify-content-center">
        <button type="submit" className="link text-center mt-3 btn btn-outline-secondary col-md-3" disabled={state.submitting}>
          Envoyez
        </button>
      </div>
    </form>
  );
}

export default FormAnonceContact;
