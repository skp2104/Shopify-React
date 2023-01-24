import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { List } from '@shopify/polaris';
import axios from 'axios';

const Heading1 = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [row, setRow] = useState();
  const fileReader = new FileReader();
  const handleonchange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
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

  const handleonsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);

    // await axios
    //   .post('http://localhost:8000/xlsx', formData)
    //   .then(() => {
    //     alert('Data imported');
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    await axios
      .post('http://localhost:8000/api/shopiy/xlsxfiles/xlsx', formData)
      .then(() => {
        alert('Data imported');
      })
      .catch((e) => {
        console.log(e);
      });

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
      <div>Heading1</div>
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

      {/* <List type='bullet'>
        {row?.map((item) => {
          return (
            <tr>
              {item?.split(',').map((value) => {
                return <td>{value}</td>;
              })}
            </tr>
          );
        })}
      
      </List> */}
    </>
  );
};

export default Heading1;
