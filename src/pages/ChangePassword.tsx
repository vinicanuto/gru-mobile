import React from 'react';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
    } from '@ionic/react'

import HeaderApp from '../components/Header';

import './ChangePassword.css';

const ChangePassword: React.FC = () =>{
    return (
    <IonPage>
        <HeaderApp />
        <IonContent>
            <div className="altera-senha">
                <form>
                    <IonItem>
                        <IonInput  name="old-password" required type="password" placeholder="Digite seu senha antiga"/>
                    </IonItem>

                    <IonItem>
                        <IonInput name="new-password" required type="password" placeholder="Digite sua nova senha"/>  
                    </IonItem>

                    <IonItem>
                        <IonInput name="new-password2" required type="password" placeholder="Digite novamente sua nova senha"/>  
                    </IonItem>
                    <IonButton expand="full" color="primary" type="submit" > Alterar senha </IonButton>
                </form>
            </div>     
        </IonContent>
    </IonPage>
);
}
export default ChangePassword;