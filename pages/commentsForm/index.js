import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useRouter } from 'next/router';

export default function CommentsForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentData = { title, description };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        console.log("Comment created successfully");
        // Réinitialiser les champs du formulaire
        setTitle("");
        setDescription("");
      } else {
        console.error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error creating comment", error);
    }
    router.push('/');
  };

  return (
    <main>
      <h1 className="text-center mt-5 mb-5">JE laisse mon avis sur le garrage </h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
            <div className="d-flex justify-content-center">
          <button className="btn btn-outline-secondary link mt-5 col-4">envoyer</button></div>
        </Form>
      </Container>
    </main>
  );
}
