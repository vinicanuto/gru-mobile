import React,{useState} from 'react';
import './Login.css';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem
    } from '@ionic/react'
import { Redirect, Route, useHistory } from 'react-router';

  const Login: React.FC = () => {
    let history = useHistory();

    const handleLogin = () =>{
      console.log('Teste');
    }
    return (
      <IonPage>
        <IonContent className="page">
            <div className="div-imagem">
                <img src="/assets/logo/logo.png" alt="GRU Airport" />
            </div>
            <div className="login">
              <form onSubmit={(e:any)=> handleLogin}>
                <IonItem className="login-input">
                    <IonInput  name="login" required type="text" placeholder="Digite seu usuário"/>
                </IonItem>

                <IonItem className="login-input" >
                    <IonInput name="password" required type="password" placeholder="Digite sua senha"/>  
                </IonItem>
                <IonButton expand="full" color="primary" type="submit" > Acessar </IonButton>
              </form>  
            </div>    
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  