import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { useState, useCallback } from 'react';
import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from '@shopify/polaris';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css ';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';
import Heading4 from './Heading4';
// import BackButton from './BackButton';
// import About from './About';
// import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
// import { useEffect } from 'react';
// import Products from './Products';

const Dashboard = (props) => {
  const [showProducts, setShowProducts] = useState(props.setDashValue);
  const [showDashboard, setShowDashboard] = useState(props.setDashValue);
  const [menuMarkup, setMenuMarkup] = useState('');

  const setPageMark = useCallback((value) => setMenuMarkup(value), []);

  return (
    <>
      {!showDashboard ? (
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => {
            setShowDashboard(true);
          }}
        >
          Back
        </Button>
      ) : null}
      {!showDashboard
        ? (() => {
            switch (menuMarkup) {
              case 'Heading1':
                return <Heading1 />;
              case 'Heading2':
                return <Heading2 />;
              case 'Heading3':
                return <Heading3 />;
              case 'Heading4':
                return <Heading4 />;
              default:
                return null;
            }
          })()
        : null}

      {/* <Frame navigation={navigationMarkup}>{pageMarkup()}</Frame> */}

      {/* </div> */}

      {showDashboard ? (
        <div>
          <h1 style={{ fontWeight: 'bold', marginLeft: '4px' }}>Dashboard</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{ margin: '10px', innerWidth: '10vw', cursor: 'pointer' }}
              onClick={() => {
                setShowDashboard(false);
                setPageMark('Heading1');
              }}
            >
              <Card title="Heading 1" sectioned></Card>
            </div>
            <div
              style={{ margin: '10px', cursor: 'pointer'  }}
              onClick={() => {
                setShowDashboard(false);
                setPageMark('Heading2');
              }}
            >
              <Card title="Heading 2" sectioned></Card>
            </div>
            <div
              style={{ margin: '10px', cursor: 'pointer'  }}
              onClick={() => {
                setShowDashboard(false);
                setPageMark('Heading3');
              }}
            >
              <Card title="Heading 3" sectioned></Card>
            </div>
            <div
              style={{ margin: '10px', cursor: 'pointer'  }}
              onClick={() => {
                setShowDashboard(false);
                setPageMark('Heading4');
              }}
            >
              <Card title="Heading 4" sectioned></Card>
            </div>
          </div>
        </div>
      ) : null}
      {/*{showProducts ? SHRAvan : null} */}
    </>
  );
};

export default Dashboard;
