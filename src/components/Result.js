import React from "react";
import { Alert, Container } from "react-bootstrap";

function Result(props) {
  console.log("result  " + props.check);
  if (props.check === true) {
    return (
      <Alert variant="success">
        <Alert.Heading> Vous etes connectez </Alert.Heading>
        <p>Adresse : {props.user.address} </p>
      </Alert>
    );
  } else if (props.check === false) {
    return (
      <Alert variant="warning">
        <Alert.Heading> Incorrecte </Alert.Heading>
      </Alert>
    );
  } else {
    return <Container> Entrez Votre Coordonnées </Container>;
  }
}

export default Result;
