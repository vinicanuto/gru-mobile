import React,{useState} from 'react';
import './Login.css';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
    IonIcon
    } from '@ionic/react'
import { Redirect } from 'react-router-dom';

import { person, lock } from 'ionicons/icons';

const Login: React.FC= () => {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSubmit(e:any){
      e.preventDefault();
      if(username==='user' && password==="user"){
        localStorage.logged=`${username + password}`
        setIsLoggedIn(true);
      }
    }

    return (
      isLoggedIn ? <Redirect to="/search-awb"/> : 
      <IonPage>
        <IonContent className="page">
            <div className="div-imagem">
                <img src="/assets/logo/logo.png" alt="GRU Airport" />
            </div>
            <div className="login">
              <form  onSubmit={e=> {handleSubmit(e)}}>
                <IonItem className="login-input" lines="none">
                  <IonIcon color="secondary" slot="start" icon={person}></IonIcon>
                    <IonInput  name="username" value={username} required 
                      type="text" placeholder="Usuário"
                      onIonChange={e=> setUsername(e.detail.value)}/>  
                </IonItem>

                <IonItem className="login-input" lines="none">
                    <IonIcon color="secondary" slot="start" icon={lock}></IonIcon>
                    <IonInput name="password" required value={password} type="password"  placeholder="Senha"
                      onIonChange={e=> setPassword(e.detail.value)}/>  
                </IonItem>
                <IonButton  size="default" expand="block"  fill="solid" color="primary"  type="submit" onKeyDownCapture={e=> {handleSubmit(e)}}> <p>Acessar</p> </IonButton>
              </form>  
            </div>    
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  