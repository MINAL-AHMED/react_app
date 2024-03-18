import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./Loadcomment";

const DishDetail = props => {
  return (
    <div>
      <Card style={{margin:"15px"}}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle className="fw-bolder">{props.dish.name}</CardTitle>
          <CardText>
           <p> {props.dish.description}</p>
           <p className="fw-bold">{props.dish.price}/-</p>
          </CardText>
          <hr/>
          <LoadComments comments={props.dish.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;

