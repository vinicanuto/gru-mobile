import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonToolbar
  } from '@ionic/react';

  import React from 'react';


const HeaderApp : React.FC= () =>{
  return (
    <IonHeader className="header">
        <IonToolbar>
          <div className="div-imagem-home">
            <img src="/assets/logo/logo-gru-cargo.png" alt="GRU Airport" />
          </div>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  )
}

export default HeaderApp;