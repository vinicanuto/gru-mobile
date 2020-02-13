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

import React,{useState} from 'react';
import './Home.css';

import HeaderApp from '../components/Header';
import Item from '../components/Item';


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
}];



const HomePage: React.FC = () => {

  const[listItems,setListItems] = useState(items);
  const[searchedItem,setSearchedItem] = useState('');

async function handleInput(valor:any){
    await setSearchedItem(valor);
  }

  /* lista todos
  (listItems.map(x => {
          return <Item key={x.id} {...x}/>;
      }))*/
  
  return (
    <IonPage>
      <HeaderApp/>
      <IonContent>
      <IonSearchbar inputmode="search" type="tel" placeholder="Buscar AWB" value={searchedItem} onIonChange={e=> handleInput(e.detail.value)} />
      <IonList> 
      {!searchedItem ? null: (listItems.filter(i=> i.id.toString().includes(searchedItem.toString())).map(x => {
        return <Item key={x.id} {...x}/>;
    }))} 
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
