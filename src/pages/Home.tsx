import {
  IonContent,
  IonList,
  IonPage,
  IonSearchbar,
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
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 2,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Pendente",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 00009223355538",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 3,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000926666038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 4,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000977730038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 5,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0008977003338",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 6,
  tipoawb: "IMPORT",
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0002323830038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 7,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0000929797038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 8,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 000765830038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 9,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 000067890038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 10,
  tipoawb: "IMPORT",
  img:"/assets/companies/aal.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 00002223830038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 11,
  tipoawb: "IMPORT",
  img:"/assets/companies/gol.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0333333830038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
,{
  id: 12,
  tipoawb: "IMPORT",
  img:"/assets/companies/tam.png",
  status: "Em trânsito",
  origem: 'MAD',
  destino : "GRU",
  documento: "DI/DAS 0666666666038",
  natureza: "NOR",
  volpesomantra:"1/195,000",
  volpesorecebido:"1/196",
  volpesoentregue:"1/196,000",
  volpesoarmazenado:"1/196,000",
  volpesoretornado:"0/0,000",
  consignatariomantra:"IBERIA LINEAS AEREAS",
  fechar:"No",
  acaopendente:"No",
  tc: "TC6",
  placaveiculo:"0005555"
}
];



const HomePage: React.FC = () => {

  const[listItems] = useState(items);
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
      <IonList className="list-content"> 
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
