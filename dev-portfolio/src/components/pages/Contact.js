import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="contact-container bg-secondary">
      <h1 className="text-center pt-4">Contact Me</h1>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Message (optional)"
            rows={4}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
