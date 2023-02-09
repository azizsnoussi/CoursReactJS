import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'

export  class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
    super(props);
}
    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header></Card.Header>
            <Card.Img variant="top" src={require('./assets/images/'+this.props.product.img)} />
            <Card.Body>
              <Card.Title>{this.props.product.title}</Card.Title>
              <Card.Text>
                {this.props.product.description}
              </Card.Text>
              <Card.Text>
                {this.props.product.price}
              </Card.Text>
            </Card.Body>
            <Button variant="primary"  >Like</Button>
          </Card>
        )
    }
}
export default  Product;