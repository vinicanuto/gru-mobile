import React,{useState, useRef} from "react";
import { IonItem,IonThumbnail, IonImg, IonLabel,IonListHeader,IonList } from '@ionic/react';



import './Accordion.css';

const Accordion = ({...props}) =>{

    const[active,setActiveState] = useState(false);
    const[height, setHeightState] = useState("0px");

    const content = useRef<HTMLDivElement>(null);

    function toggleAccordion(){
        setActiveState(prev=>!prev);
        setHeightState(active ? "0px" : `${content.current?.scrollHeight}px`)
    }

    return(
        <div className="accordion-section">
            
            <IonItem detail={true} button={true} className={"accordion"} onClick={toggleAccordion} detailIcon={active && props.children ? "arrow-down" : "arrow-forward" }>
                <IonThumbnail className="thumb">
                  <IonImg src={props.img}/>
                </IonThumbnail>

                <IonLabel className="accordion-title">
                  <h2>AWB: {props.id}</h2>
                  <p>Status: {props.status}</p>
                </IonLabel> 
            </IonItem>
            <div ref={ content} style={{maxHeight: `${height}`}} className="accordion-content">            
            {props.children ? (
                    <IonList>
                    <IonListHeader>
                        <IonLabel>Informações Gerais</IonLabel>
                    </IonListHeader>
                    <IonItem lines="full"> 
                        <IonLabel> Documento: {props.documento}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full">  
                        <IonLabel> Tipo AWB: {props.tipoawb}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                        <IonLabel> Origem: {props.origem}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                        <IonLabel> Destino: {props.destino}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                        <IonLabel> Data Recebimento: 15/02/2020  </IonLabel>
                    </IonItem>

                    <IonListHeader>
                        <IonLabel>Informações de Transporte</IonLabel>
                    </IonListHeader>
                    <IonItem lines="full"> 
                    <IonLabel> Consignatario Mantra: {props.consignatariomantra}  </IonLabel>
                    </IonItem >
                    <IonItem lines="full"> 
                    <IonLabel> Exportador: {props.tipoawb}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                    <IonLabel> Consignatario: {props.consignatario}  </IonLabel>
                    </IonItem>

                    <IonListHeader>
                        <IonLabel>Resumos</IonLabel>
                    </IonListHeader>
                    <IonItem lines="full"> 
                    <IonLabel> Volume/Peso Mantra: {props.consignatariomantra}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                    <IonLabel> Volume/Peso Recebido: {props.tipoawb}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                    <IonLabel> Volume/Peso Entregue: {props.consignatario}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                    <IonLabel> Volume/Peso Armazenado: {props.consignatario}  </IonLabel>
                    </IonItem>
                    <IonItem lines="full"> 
                    <IonLabel> Volume/Peso Retornado: {props.consignatario}  </IonLabel>
                    </IonItem>
                </IonList>
                ) 
                : null}
            </div>
        </div>
    );
}

export default Accordion;