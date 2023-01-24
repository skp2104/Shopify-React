import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useState } from 'react';
const Products = () => {
  const [data, setData] = useState([]);

  const GetData = () => {
    Axios.get('http://localhost:8000/api/shopify/products').then((response) => {
      //console.log('response');
      //console.log(response.data.products);
      //console.log(response.data.products);
      // response.data.products.map((item) => {
      //   console.log(item);
      // });

      // console.log(response.data.products.id);
      setData(response.data.products);
    });
  };

  return (
    <>
      <div>
        <Button variant='outline-primary' size='sm' onClick={GetData}>
          Upload FIles
        </Button>
        {data?.map((item) => {
          return (
            <div>
              {' '}
              {item.id}, {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
