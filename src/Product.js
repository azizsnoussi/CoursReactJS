import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'


export

const Product = ({product}) => (



    <Card style={{ width: '18rem' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={require('./assets/images/'+product.img)} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>
      </Card.Body>
      <Button variant="primary">Like</Button>
    </Card>
  
)

export default Product;