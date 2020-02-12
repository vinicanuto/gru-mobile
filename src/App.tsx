import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter} from '@ionic/react-router';
import { AppPage } from './declarations';
import {RouteProps} from 'react-router';

import Menu from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import isAuthenticaded from './components/Authentication';
import ChangePassword from './pages/ChangePassword';
import { search, key } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Buscar AWB',
    url: '/home',
    icon: search
  },
  {
    title: 'Alterar Senha',
    url: '/change-password',
    icon: key
  }
];

interface PrivateRouteProps extends RouteProps{
  // tslint:disable-next-line:no-any
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const {component: Component,...rest} = props;

  return(
    <Route {...rest} 
      render={ props =>
        isAuthenticaded() ? <Component {...rest}/> :
        <Redirect to={{pathname: "/login"}} />
      }/>
  )
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <PrivateRoute path="/change-password" component={ChangePassword} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
          <PrivateRoute path="/home" component={Home} exact={true} />
          <Route path="/" render={() => <Redirect to="/login"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
