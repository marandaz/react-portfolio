import React from "react";
import Container from "../components/container";

function About() {
      return (
    <>
    <h2 className="about text-center">Maranda's Portfolio</h2>
      <Container className="col-md-8 my-4 ml-4 mr-4">
        <p>
          Welcome to my page! 
        </p>
      <p>
      I'm currently a Senior Product Manager for a bomb e-commerce company based out of Milwaukee, Wisconsin. I spend most of my time talking to people, learning, and figuring out how to make the magic happen.
      </p>
      <p>
      Right now, my training wheels are on and I'm learning the ropes for full stack develpment. I've spent the better half of 2020 learning new skills and figuring out how I can make the most impact. I consider myself a lifelong student, as I'm always looking for a new challenge. Think of me as always in beta, learning and refining along the way.
      </p>
      <p>
        When I'm not heads-down in a book, Reddit, or podcast, you can probably find me and my dog adventuring the greater Seattle area where I currently reside. 
      </p>
        <p>
          Go ahead and checkout my LinkedIn or current projects in Github to learn a little more about my skills. 
        </p>

      </Container>
    </>
  );
}

export default About;
