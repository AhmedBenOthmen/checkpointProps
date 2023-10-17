import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// destructuring

const Player = ({ player }) => {
  return (
    <div className="player">
      <Card style={{ width: "300px" }}>
        <Card.Img
          variant="top"
          src={player.imageUrl}
          style={{ width: "auto", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>Name : {player.name}</Card.Title>
          <Card.Text>Team : {player.team}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nationality : {player.nationality}</ListGroup.Item>
          <ListGroup.Item>Jersey Number : {player.jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>Age : {player.age}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
// setting default Props
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  imageUrl: "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
};

// Setting PropsTypes
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default Player;
