import React,{useState} from 'react';
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';



 const  Item = ({...props}) => {
    const [open,setOpen] = useState(false);
    console.log('Open?',open);
  return (
            <IonItem key={props.id} onClick={()=> setOpen(prev => !prev)}>
            <IonThumbnail className="thumb">
              <IonImg src={props.img}/>
            </IonThumbnail>
            <IonLabel>
              <h2>AWB: {props.id}</h2>
              <p>Status: {props.status}</p>
              {/*<p>Tipo de AWB: {}</p>
              <p>Origem: {}</p>
              <p>Destino: {}</p>
              <p>Placa do Veículo: {}</p>
              <p>Documento: {}</p>
              <p>Natureza: {}</p>
              <p>TC: {}</p>
              <p>Tipo de AWB: {}</p>*/ }
            </IonLabel> 
          </IonItem>   
  );
}
export default Item;