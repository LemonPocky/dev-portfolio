import React from 'react';

export default function About() {
  return (
    <section className="about-me text-center border border-2">
      <h2 id="about-me" className="">
        About Me
      </h2>
      <p>
        I am a motivated software developer with experience in JavaScript, CSS,
        Java, and SQL. I am adaptive to new technologies, and I'm ready to take
        on any challenges before me.
      </p>
      <p>Use the navigation bar above to see some examples of my work!</p>
      <a
        href={`${process.env.PUBLIC_URL}/files/LilyHuangResume.pdf`}
        className="btn btn-primary mb-3"
        target="_blank"
        rel="noreferrer"
        download
      >
        Download Resume
      </a>
    </section>
  );
}
