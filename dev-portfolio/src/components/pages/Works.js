import React from 'react';
import Project from '../Project';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Works() {
  return (
    <section>
      <h2 className="text-center">My Works</h2>
      <Container>
        <Row>
          <Col lg={4} className="projectItem">
            <Project
              title="MySpot"
              deployedLink="https://myspot-maps.herokuapp.com/"
              githubLink="https://github.com/LemonPocky/myspot"
              imagePath="../../../public/images/myspot.png"
              altText="MySpot screenshot"
              description="Save and share your favorite spots on an interactive Google Map."
            />
          </Col>

          <Col lg={4} className="projectItem">
            <Project
              title="Weather Dashboard"
              deployedLink="https://lemonpocky.github.io/weather-dashboard/"
              githubLink="https://github.com/LemonPocky/weather-dashboard"
              imagePath="../../../public/images/myspot.png"
              altText="Weather Dashboard screenshot"
              description="Quickly search for weather from any location using the OpenWeather One Call API."
            />
          </Col>

          <Col lg={4} className="projectItem">
            <Project
              title="JavaScript Quiz"
              deployedLink="https://lemonpocky.github.io/coding-quiz/"
              githubLink="https://github.com/LemonPocky/coding-quiz"
              imagePath="../../../public/images/myspot.png"
              altText="JavaScript quiz screenshot"
              description="Test your JavaScript knowledge! Answer the questions as fast as you can before time runs out."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
