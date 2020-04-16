import React from "react";
import { Alert , Container } from "react-bootstrap";

function Result(props){
    console.log("result  " + props.check);
    if(props.check === true){
        return(
            <Alert variant="success">
                <Alert.Heading> You're logged in </Alert.Heading>
                <p> Address : {props.user.address} </p>
            </Alert>
        );
    }else{
        return(<Container> Please enter your credentials </Container>);
         
    }
}   

export default Result;