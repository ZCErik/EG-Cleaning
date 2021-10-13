import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// import { ReactKeycloakProvider } from '@react-keycloak/web'
// import keycloak from './keycloak'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import CleanLayout from './layouts/CleanLayout';

// Views 
import Home from './views/Home';
import Signin from './views/SignIn';
import Signup from './views/Signup';
import GetMore from './views/GetMore';
import Booking from './views/Booking';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    // <ReactKeycloakProvider authClient={keycloak}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/signin" component={Signin} layout={CleanLayout} />
            <AppRoute exact path="/signup" component={Signup} layout={CleanLayout} />
            <AppRoute exact path="/get-more" component={GetMore} layout={CleanLayout} />
            <AppRoute exact path="/booking" component={Booking} layout={LayoutDefault} />
          </Switch>
        )} />
    // {/* </ReactKeycloakProvider> */}
  );
}

export default App;