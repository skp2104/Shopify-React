import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { List } from '@shopify/polaris';

const Heading2 = () => {
  const [file, setFile] = useState();
  const [row, setRow] = useState();
  const fileReader = new FileReader();
  const handleonchange = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0].name);
    console.log(e);
    console.log('--------------');
    console.log(e.target.file);
  };

  const convert = async (text) => {
    console.log('heere....');
    const arr = text.split('\n');
    await setRow(arr);
    console.log(row);
  };

  const handleonsubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        console.log(text);
        convert(text);
      };
    }

    fileReader.readAsText(file);
  };

  return (
    <>
      <div>Heading2</div>
      <input type={'file'} onChange={handleonchange} />
      <Button
        variant='outline-primary'
        size='sm'
        onClick={(e) => {
          handleonsubmit(e);
        }}
      >
        Upload FIles
      </Button>

      {/* {row?.map((item) => {
        // item?.split(',').map((data) => {
        <div>{item}</div>;
        // });
      })} */}

      <List type='bullet'>
        {row?.map((item) => {
          return (
            <tr>
              {item?.split(',').map((value) => {
                return <td>{value}</td>;
              })}
            </tr>
          );
        })}
        {/* <List.Item>Yellow shirt</List.Item> */}
      </List>
    </>
  );
};

export default Heading2;
