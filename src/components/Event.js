import React from "react";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
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
class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return (
      <div>
        <DivElem />
        <DivElem />
        <DivElem />
      </div>
    );
  }
}
export default Event;
