import {
  ActionList,
  AppProvider,
  Card,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Layout,
  Loading,
  Modal,
  Navigation,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
  TextField,
  Toast,
  TopBar,
} from '@shopify/polaris';
import {
  ArrowLeftMinor,
  HomeMajor,
  HomeMinor,
  OrdersMajor,
  ConversationMinor,
} from '@shopify/polaris-icons';
import { useState, useCallback, useRef } from 'react';
import Dashboard from './Dashboard';
import { HomePage } from './HomePage';
import Products from './Products';
import About from './About';
import { useNavigate } from '@shopify/app-bridge-react';
export function FrameExample() {
  const defaultState = useRef({
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'Jaded Pixel',
  });
  const skipToContentRef = useRef(null);

  const [menuMarkup, setMenuMarkup] = useState('');

  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    []
  );

  const setPageMark = useCallback((value) => setMenuMarkup(value), []);

  const navigationMarkup = (
    <Navigation location="/">
      {/* <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
            onClick: () => setPageMark('Home'),
          },
        ]}
      /> */}
      <Navigation.Section
        separator
        title="CONTENT"
        items={[
          {
            label: 'Dashboard',
            icon: HomeMinor,
            onClick: () => setMenuMarkup('Dashboard'),
          },
          {
            label: 'Products',
            icon: OrdersMajor,
            onClick: () => setMenuMarkup('Products'),
          },
        ]}
        // action={
        //   {
        //     //   icon: ConversationMinor,
        //     //   accessibilityLabel: 'Contact support',
        //     //   onClick: toggleModalActive,
        //   }
        // }
      />
    </Navigation>
  );

  const pageMarkup = () => {
    //const menuState='products'
    switch (menuMarkup) {
      case 'Dashboard':
        console.log('helo');
        return <Dashboard setDashValue={true} />;
      case 'Products':
        return <Products />;
      case 'Home':
        return <HomePage />;
      default:
        return <About />;
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <AppProvider
        i18n={{
          Polaris: {
            Frame: {
              navigationLabel: 'Navigation',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}
      >
        <Frame navigation={navigationMarkup}>{pageMarkup()}</Frame>
      </AppProvider>
    </div>
  );
}
