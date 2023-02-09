import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'

export default class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
    super(props);
}
    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header>
                <Card.Img variant="top" src={require('./assets/images/'+this.props.product.img)} />
            </Card.Header>
            
            <Card.Body>
              <Card.Title><h2>{this.props.product.name}</h2></Card.Title>
              <Card.Text>
                {this.props.product.description}
              </Card.Text>
              <Card.Text>
                {this.props.product.price}
              </Card.Text>
            </Card.Body>
            <Button variant="primary"  >Like  {this.props.product.like}</Button>
          </Card>
        )
    }
}
