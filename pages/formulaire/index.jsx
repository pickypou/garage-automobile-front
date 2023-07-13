import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import Footer from '../footer';
import Link from 'next/link';

export default function ContactForm  () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/your-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Le formulaire a été soumis avec succès, vous pouvez afficher un message de réussite ou effectuer une autre action
        console.log('Formulaire soumis avec succès');
      } else {
        // Une erreur s'est produite lors de la soumission du formulaire
        console.log('Une erreur s\'est produite lors de la soumission du formulaire');
      }
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la soumission du formulaire', error);
    }
  };

  return (
    <>
    <h1 className='text-center mt-5 mb-4'>Remplir le formulaire</h1>
      <Container>
        <Row className="justify-content-center">
          <Form onSubmit={handleSubmit} className="col-8">
            <Form.Group controlId="formName">
              <Form.Label className='text-secondary'>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className='text-secondary'>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className='text-secondary'>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
            <div className="d-flex justify-content-around">
            <button  type="submit" className='btn btn-outline-secondary mt-5 clo-4 link'>
              Envoyer votre message
            </button>
            <Link href="/">
            <button className="btn btn-outline-secondary mt-5 clo-4 link">
          Retour a l&apos;accueil
          </button>
          </Link>
          </div>
          </Form>
        </Row>
      </Container>
      <Link href="/formulaire">
          
        </Link>

      <Footer />
    </>
  );
};


