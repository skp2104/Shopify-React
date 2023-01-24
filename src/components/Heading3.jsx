import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { List } from '@shopify/polaris';

const Heading3 = () => {
  const [file, setFile] = useState();
  const [row, setRow] = useState();
  const fileReader = new FileReader();
  const handleonchange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const convert = async (text) => {
    console.log('heere....');
    const arr = text.split('\n');
    await setRow(arr);
    console.log(row);
    arr.map((item) => {
      //console.log(item.split(','));
    });
  };

  const handleonsubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        convert(text);
      };
    }

    fileReader.readAsText(file);
  };

  return (
    <>
      <div>Heading3</div>
      <input type={'file'} id={'csv'} onChange={handleonchange} />
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

export default Heading3;
