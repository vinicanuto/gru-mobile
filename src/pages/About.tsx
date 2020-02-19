import React from 'react';

import HeaderApp from '../components/Header';

import {
    IonContent,
    IonPage,
    IonCard,
    IonImg,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    } from '@ionic/react';

import './About.css';

const About: React.FC = () => {

    return (
    <IonPage>
        <HeaderApp/>
        <IonContent>
            <IonCard>
                <IonImg src="/assets/about/vista-aerea-gru.jpg"/>
                <IonCardHeader>
                    <IonCardSubtitle>
                        História
                    </IonCardSubtitle>
                    <IonCardTitle>
                        Aeroporto Internacional de São Paulo
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                Um dos principais HUBs da América Latina, o Aeroporto Internacional de São Paulo, 
                em Guarulhos, foi inaugurado em 20 de janeiro de 1985.
                <br/>
                <br/>
                Em 1989, iniciou a operação da segunda pista, com 3,7 mil metros de extensão. 
                Quatro anos mais tarde, em 1993, concluiu a primeira expansão com a abertura do Terminal 2.
                <br/>
                <br/>
                Em 2001, passou a ser chamado de Aeroporto Internacional de São Paulo/Guarulhos 
                - Governador André Franco Montoro. ​
                <br/>
                <br/>
                No ano de 2004, foi concluída a modernização da torre de controle.
                <br/>
                <br/>
                Já em 2012, foi inaugurado o Terminal 4, hoje chamado de Terminal 1. 
                E em 6 de fevereiro do mesmo ano foi concedido à iniciativa privada. O consórcio formado pelas empresas Invepar e ACSA (Airports Company South Africa) foi anunciado como vencedor do leilão de concessão.
                <br/>
                <br/>
                O contrato foi assinado em julho de 2012 por um período de 20 anos, formando a Concessionária do Aeroporto Internacional de Guarulhos S.A., 
                que responde por 51% da participação acionária, e se soma aos 49% da estatal Infraero. 
                <br/>
                <br/>
                Durante o período de transferência operacional, em 15 de novembro de 2012, o aeroporto ganhou uma nova marca: 
                GRU Airport – Aeroporto Internacional de São Paulo.
                <br/>
                <br/>
                Em 2014, inaugurou o moderno Terminal 3, com 192 mil metros quadrados, construído em tempo recorde: 
                1 ano e 9 meses de obra.
                <br/>
                <br/>
                Em novembro de 2015, os terminais foram renumerados e os antigos terminais 1 e 2 foram unificados, 
                tornando-se o atual terminal 2 e o antigo terminal 4 o atual terminal 1, 
                melhorando a lógica de organização dos terminais e facilitando o deslocamento dos usuários no GRU Airport.
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonImg src="/assets/about/mapa-gru.jpg"/>
                <IonCardHeader>
                    <IonCardSubtitle>
                        Números
                    </IonCardSubtitle>
                    <IonCardTitle>
                        GRU Airport
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                <li>ILS: Categoria III-A​</li>
                <li>​​Horas de operação: 24 horas em todos os terminais​</li>
                <li>Área total do aeroporto (cerca patrimonial): 11.905.056,52 m2</li>
                <li>Área total do aeroporto (cerca operacional): 5.883.000 m2​</li>
                ​<li>Área total de pátio: 975.513,18 m2</li>
                <li>Pistas de pouso / decolagem: 301.500 m²  - 09R/27L com 3.000 m x 45 m e 09L/27R com 3.700 m x 45 m, homologada para operação de aeronaves de Código F (A380)</li>
                <li>Taxiways:  485.632,1 m²</li>
                <li>Slots disponíveis por hora: 47</li>
                <li>Posições de estacionamento para aeronaves: 123 posições</li>
                <li>Pontes de embarque: 45 (das quais 6 são de código F)</li>
                <li>Tipos de aeronave: Códigos A, B, C, D, E e F (incluindo 747-800 e A380)</li>
                <li>Coordenação das posições: ATA level 2 Airport</li>
                <br/> 
                Balcões de check-in: 362
                <br/>
                Terminal 1: 34
                <br/>
                Terminal 2: 185 / T2 (re-check-in): 15 
                <br/>
                Terminal 3: 102 / T3 (re-check-in): 26
                <br/>
                Portões de embarque: 77
                <br/>
                Terminal 1: 9
                <br/>
                Terminal 2​: 42​​
                <br/>
                Terminal 3: 26​​​
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    
    );
}

export default About;