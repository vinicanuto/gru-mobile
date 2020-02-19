import React from 'react';
import  {IonSplitPane } from '@ionic/react';
import Menu from '../components/Menu';

import { search, key,logOut, helpCircle } from 'ionicons/icons';
import { AppPage } from '../declarations';


const appPages: AppPage[] = [
    {
      title: 'Buscar AWB',
      url: '/search-awb',
      icon: search,
      color:'primary',
    },
    {
      title: 'Alterar Senha',
      url: '/change-password',
      icon: key,
      color:'primary',
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
      color:'danger',
    }  
  ];

const SplitPane = () => {
return(
    <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
    </IonSplitPane>
)
}

export default SplitPane;