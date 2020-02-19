import React,{useState} from 'react';
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

    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [errorCurrentPassword, setErrorCurrentPassword] = useState();
    const [errorMismatchNewPassword, setErrorMismatchNewPassword] = useState();

    function handleSubmit(e: any){
        e.preventDefault();
        currentPassword !== "user" ? setErrorCurrentPassword('* Senha atual incorreta') : setErrorCurrentPassword(null);
        newPassword !== repeatPassword ? setErrorMismatchNewPassword('* As senhas não coincidem') : setErrorMismatchNewPassword(null);
    }

    function handleChangeCurrentPassword(e:any){
        setCurrentPassword(e.detail.value);
        setErrorCurrentPassword(null);
    }

    function handleChangeNewPassword(e:any){
        setNewPassword(e.detail.value);
        setErrorMismatchNewPassword(null);
    }

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
                <form  onSubmit={e=> handleSubmit(e)}>
                    <IonItem lines="full">
                        <IonInput  name="current-password" required type="password" placeholder="Senha atual" onIonChange={e=> handleChangeCurrentPassword(e)}/>
                    </IonItem>
                    {errorCurrentPassword ? 
                        <IonLabel color="danger"><br/> {errorCurrentPassword} </IonLabel> 
                            : errorCurrentPassword
                    }
                    <IonItem lines="full">
                        <IonInput name="new-password" required type="password" placeholder="Nova senha" onIonChange={e=> handleChangeNewPassword(e)} />  
                    </IonItem>
                    <IonItem lines="full">
                        <IonInput name="repeat-new-password" required type="password" placeholder="Repita nova senha" onIonChange={e=> setRepeatPassword(e.detail.value)}/>  
                    </IonItem>
                    {errorMismatchNewPassword ? 
                        <IonLabel color="danger"> <br/> {errorMismatchNewPassword}</IonLabel> 
                        : errorMismatchNewPassword
                    }
                    <IonButton expand="block" color="primary" type="submit">Confirmar</IonButton>
                </form>
            </div>     
        </IonContent>
    </IonPage>
);
}
export default ChangePassword;