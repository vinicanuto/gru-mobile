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
import Accordion from '../components/Accordion';


const items = [{
  id: 1,
  tipoawb: "IMPORT",
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 2,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 3,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 4,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 5,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 6,
  tipoawb: "IMPORT",
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 7,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 8,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 9,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 10,
  tipoawb: "IMPORT",
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 11,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
,{
  id: 12,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000923830038",
  natureza: "NOR",
}
];



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
        return (
        <Accordion key={x.id} {...x}> 
            <>
            </>
        </Accordion>
        );
    }))} 
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
