import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function CommentsForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const commentData = { title, description };
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });
  
        if (response.ok) {
          console.log('Comment created successfully');
          // Réinitialiser les champs du formulaire
          setTitle('');
          setDescription('');
        } else {
          console.error('Failed to create comment');
        }
      } catch (error) {
        console.error('Error creating comment', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    );
  };
  