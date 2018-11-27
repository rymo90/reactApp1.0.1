import React from "react";
import building from "./Images/building.jpg";
import art from "./Images/art.jpg";
import { Carousel, Jumbotron, Button } from "react-bootstrap";

const Image = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img src={art} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={building} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={art} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const DivElem = () => {
  return (
    <Jumbotron className="jumbotron">
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};
class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return (
      <div>
        <Image />
        <DivElem />
        <DivElem />
        <DivElem />
        <DivElem />
      </div>
    );
  }
}
export default Current;
