import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonThumbnail,
  IonImg
  } from '@ionic/react';

import React from 'react';
import './Home.css';

import HeaderApp from '../components/Header';


const items = [{
  id: 1,
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  destino : "Itália"
}, {
  id: 2,
  img:"/assets/companies/gol.png",
  status: "Entregue",
  destino : "Brasil"
}, {
  id: 3,
  img:"/assets/companies/tam.png",
  status: "Pendente",
  destino : "Estados Unidos"
}, {
  id: 4,
  img:"/assets/companies/gol.png",
  status: "Pendente",
  destino : "Estados Unidos"
}, {
  id: 5,
  img:"/assets/companies/gol.png",
  status: "Pendente",
  destino : "Estados Unidos"
}, {
  id: 6,
  status: "Pendente",
  img:"/assets/companies/aal.png",
  destino : "Estados Unidos"
}, {
  id: 7,
  img:"/assets/companies/tam.png",
  status: "Pendente",
  destino : "Estados Unidos"
}, {
  id: 8,
  status: "Pendente",
  img:"/assets/companies/gol.png",
  destino : "Estados Unidos"
}, {
  id: 9,
  status: "Pendente",
  img:"/assets/companies/tam.png",
  destino : "Estados Unidos"
}, {
  id: 10,
  img:"/assets/companies/aal.png",
  status: "Pendente",
  destino : "Estados Unidos"
}].map(x=>{
return (
      <IonItem key={x.id} href="#">
        <IonThumbnail className="thumb">
          <IonImg src={x.img}/>
        </IonThumbnail>
        <IonLabel>
          <h2>Carga: {x.id}</h2>
          <p>Status: {x.status}</p>
        </IonLabel>
      </IonItem>      
  )
})

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <HeaderApp/>
      <IonContent>
      <IonSearchbar type="tel" placeholder="Buscar AWB" />
      <IonList> 
        {items}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
