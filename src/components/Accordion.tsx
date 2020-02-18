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
            
            <IonItem lines="none" detail={true} button={true} className={"accordion"} onClick={toggleAccordion} detailIcon={active && props.children ? "arrow-down" : "arrow-forward" }>
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
                    <div className="accordion-list">
                    <IonList>
                        <IonListHeader>
                            <IonLabel>Resumos</IonLabel>
                        </IonListHeader>

                        <IonItem lines="full"> 
                            <IonLabel>
                                Volume/Peso Mantra: 
                                <span>{props.volpesomantra} </span>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> 
                                Volume/Peso Recebido: 
                                <span>{props.volpesorecebido}</span> 
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> 
                                Volume/Peso Entregue: 
                                <span>{props.volpesoentregue}</span>   
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> 
                                Volume/Peso Armazenado: 
                                 <span>{props.volpesoarmazenado}</span>  
                            </IonLabel>
                        </IonItem>
                        <IonItem className="last-item"> 
                            <IonLabel> 
                                Volume / Peso Retornado: 
                                <span>{props.volpesoretornado}</span> 
                            </IonLabel>
                        </IonItem>

                        <IonListHeader>
                            <IonLabel>Informações Gerais</IonLabel>
                        </IonListHeader>
                        <IonItem lines="full"> 
                            <IonLabel> 
                                Documento: <span>{props.documento}</span>  
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="full">  
                            <IonLabel> Tipo AWB: <span>{props.tipoawb}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Origem: <span>{props.origem}</span>   </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Destino: <span>{props.destino}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Natureza: <span>{props.natureza}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> TC: <span>{props.tc}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Fechar: <span>{props.fechar}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Ação Pendente: <span>{props.acaopendente}</span>  </IonLabel>
                        </IonItem>
                        <IonItem lines="full"> 
                            <IonLabel> Placa do Veículo: <span>{props.placaveiculo}</span>  </IonLabel>
                        </IonItem>
                        <IonItem className="last-item"> 
                            <IonLabel> Data Recebimento: <span> 15/02/2020 </span>   </IonLabel>
                        </IonItem>

                        <IonListHeader>
                            <IonLabel>Informações de Transporte</IonLabel>
                        </IonListHeader>
                        <IonItem lines="full"> 
                            <IonLabel> Consignatario Mantra: <span>{props.consignatariomantra}</span>  </IonLabel>
                        </IonItem >
                        <IonItem lines="full"> 
                            <IonLabel> Exportador: <span>{props.tipoawb}</span>  </IonLabel>
                        </IonItem>
                        <IonItem className="last-item"> 
                            <IonLabel> Consignatario: <span>{props.consignatario}</span>  </IonLabel>
                        </IonItem>
                </IonList>
                </div>
                ) 
                : null}    
            </div>
        </div>
    );
}

export default Accordion;