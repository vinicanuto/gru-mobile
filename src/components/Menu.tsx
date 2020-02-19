import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
  IonFooter,
  IonImg
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import isAuthenticaded from '../utils/Authentication';

import './Menu.css'

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  isAuthenticaded() ?
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
      </IonToolbar>
    </IonHeader>
    <IonContent className="content-menu">
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem lines="full" routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} color={appPage.color}/>
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
    <IonFooter className="footer ion-no-border">
      <IonImg src="/assets/icon/reply.png" alt="Reply running man logo"/>
        <IonLabel>
            © Copyright 2009 - 2020 - Logistics Reply
        </IonLabel>
    </IonFooter>
  </IonMenu>
: null);

export default withRouter(Menu);
