import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter} from '@ionic/react-router';
import {RouteProps} from 'react-router';

import { search, key,logOut,helpCircle } from 'ionicons/icons';
import { AppPage } from '../declarations';
import Menu from '../components/Menu';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import About from '../pages/About';
import isAuthenticaded from '../utils/Authentication';
import ChangePassword from '../pages/ChangePassword';

const appPages: AppPage[] = [
    {
      title: 'Buscar AWB',
      url: '/search-awb',
      icon: search,
      color:'primary'
    },
    {
      title: 'Alterar Senha',
      url: '/change-password',
      icon: key,
      color:'primary'
    },
    {
      title: 'Sobre GRU - Airport',
      url: '/about',
      icon: helpCircle,
      color:'primary',
    },
    {
      title: 'Sair',
      url: '/logout',
      icon: logOut,
      color:'danger'
    },
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
      <IonSplitPane contentId="main" when="never">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <Redirect to="/login"/> } exact={true} />
          <Route path="/login" component={Login} exact={true}/>
          <PrivateRoute path="/search-awb" component={Home} exact={true} />
          <PrivateRoute path="/change-password" component={ChangePassword} exact={true}/>
          <PrivateRoute path="/logout" component={Logout}  exact={true} />
          <PrivateRoute path="/about" component={About}  exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
    )
}



export default Routes;