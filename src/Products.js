import React from 'react';

import Row from 'react-bootstrap/Row';
import data from '../src/products.json'
import Col from 'react-bootstrap/Col';
import Product  from '../src/Product';



const Products = () => {

  return (
   
      <div className='row-wrapper'>
        <Row>
            <Col md={4}  >
           {data.map((product,i) => (
            <Product key={i} product={product} />
          ))}  
            </Col>
        </Row>
      </div>
    ) 
  
};

export default Products;