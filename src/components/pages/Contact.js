import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="contact-container bg-secondary text-center pb-2">
      <h1 className="pt-4">Contact Me</h1>

      <Button className="contact-button my-2 d-block mx-auto" variant="light">
        Email: lil.lily.huang@gmail.com
      </Button>

      <Button className="contact-button my-2 d-block mx-auto" variant="light">
        Phone: (714) 235-3698
      </Button>

      <Button
        className="contact-button"
        variant="light"
        href="https://github.com/LemonPocky"
      >
        <span className="text-decoration-underline">GitHub: LemonPocky</span>
      </Button>
    </div>
  );
}
