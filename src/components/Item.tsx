import React,{useState, useRef, useEffect} from 'react';
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';



 const  Item = ({...props}) => {
    const [open,setOpen] = useState(false);
    const contentRef = useRef(null);


    const toogleActive = () => {
      setOpen(!open)
    }
  

  return (
           <div className="accordion-section">
              <IonItem  button={true} className="accordion" key={props.id} onClick={toogleActive}>
                <IonThumbnail className="thumb">
                  <IonImg src={props.img}/>
                </IonThumbnail>
                <IonLabel className="accordion-title">
                  <h2>AWB: {props.id}</h2>
                  <p>Status: {props.status}</p>
                </IonLabel> 
                <IonLabel className="accordion-content">
                  <div
                   ref={contentRef}
                    className="accordion-content"
                  >
                    {props.children}
                  </div>
                </IonLabel> 
                {/*<p>Tipo de AWB: {}</p>
                <p>Origem: {}</p>
                <p>Destino: {}</p>
                <p>Placa do Veículo: {}</p>
                <p>Documento: {}</p>
                <p>Natureza: {}</p>
                <p>TC: {}</p>
                <p>Tipo de AWB: {}</p>*/ }
            </IonItem>
           </div>    
  );
}
export default Item;