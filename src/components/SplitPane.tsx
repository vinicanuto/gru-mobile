import React from 'react';
import  {IonSplitPane } from '@ionic/react';
import Menu from '../components/Menu';

import { search, key } from 'ionicons/icons';
import { AppPage } from '../declarations';

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

const SplitPane = () => {
return(
    <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
    </IonSplitPane>
)
}

export default SplitPane;