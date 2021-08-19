import React from 'react';
import Project from '../Project';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imgDir = process.env.PUBLIC_URL + '/images';

export default function Works() {
  return (
    <section>
      <h2 className="text-center pt-4">My Works</h2>
      <Container>
        <Row>
          <Col lg={6} className="project-item">
            <Project
              title="MySpot"
              deployedLink="https://myspot-maps.herokuapp.com/"
              githubLink="https://github.com/LemonPocky/myspot"
              imagePath={`${imgDir}/myspot.png`}
              altText="MySpot screenshot"
              description="Save and share your favorite spots on an interactive Google Map."
            />
          </Col>

          <Col lg={6} className="project-item">
            <Project
              title="Weather Dashboard"
              deployedLink="https://lemonpocky.github.io/weather-dashboard/"
              githubLink="https://github.com/LemonPocky/weather-dashboard"
              imagePath={`${imgDir}/weather-dashboard.png`}
              altText="Weather Dashboard screenshot"
              description="Quickly search for weather from any location using the OpenWeather One Call API."
            />
          </Col>

          <Col lg={6} className="project-item">
            <Project
              title="JavaScript Quiz"
              deployedLink="https://lemonpocky.github.io/coding-quiz/"
              githubLink="https://github.com/LemonPocky/coding-quiz"
              imagePath={`${imgDir}/javascript-quiz.png`}
              altText="JavaScript quiz screenshot"
              description="Test your JavaScript knowledge! Answer the questions as fast as you can before time runs out."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
