import React from 'react';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
    IonLabel
    } from '@ionic/react'

import HeaderApp from '../components/Header';

import './ChangePassword.css';

const ChangePassword: React.FC = () =>{
    return (
    <IonPage>
        <HeaderApp />
        <IonContent>
            <div className="header">
                <IonLabel>
                    <h2>Alterar Senha</h2>
                </IonLabel>
            </div>
             
            <div className="altera-senha">
                <form>
                    <IonItem lines="full">
                        <IonInput  name="current-password" required type="password" placeholder="Senha atual"/>
                    </IonItem>
                    <IonItem lines="full">
                        <IonInput name="new-password" required type="password" placeholder="Nova senha"/>  
                    </IonItem>
                    <IonItem lines="full">
                        <IonInput name="repeat-new-password" required type="password" placeholder="Repita nova senha"/>  
                    </IonItem>
                    <IonButton expand="block" color="primary" type="submit" >Confirmar</IonButton>
                </form>
            </div>     
        </IonContent>
    </IonPage>
);
}
export default ChangePassword;