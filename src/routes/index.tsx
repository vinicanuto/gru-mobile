import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter} from '@ionic/react-router';
import {RouteProps} from 'react-router';

import { search, key } from 'ionicons/icons';
import { AppPage } from '../declarations';
import Menu from '../components/Menu';
import Home from '../pages/Home';
import Login from '../pages/Login';
import isAuthenticaded from '../components/Authentication';
import ChangePassword from '../pages/ChangePassword';

const appPages: AppPage[] = [
    {
      title: 'Buscar AWB',
      url: '/search-awb',
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


const Routes = ()  => {
    return(
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <Redirect to="/login"/> } exact={true} />
          <Route path="/login" component={Login} exact={true}/>
          <PrivateRoute path="/search-awb" component={Home} exact={true} />
          <PrivateRoute path="/change-password" component={ChangePassword} exact={true}/>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
    )
}



export default Routes;