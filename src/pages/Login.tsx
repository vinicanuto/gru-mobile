import React,{useState} from 'react';
import './Login.css';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem
    } from '@ionic/react'
import { Redirect } from 'react-router-dom';

const Login2: React.FC= () => {

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
      isLoggedIn ? <Redirect to="/home"/> : 
      <IonPage>
        <IonContent className="page">
            <div className="div-imagem">
                <img src="/assets/logo/logo.png" alt="GRU Airport" />
            </div>
            <div className="login">
              <form onSubmit={e=> {handleSubmit(e)}}>
                <IonItem className="login-input">
                    <IonInput  name="username" value={username} required 
                      type="text" placeholder="Digite seu usuário"
                      onIonChange={e=> setUsername(e.detail.value)}/>  
                </IonItem>

                <IonItem className="login-input" >
                    <IonInput name="password" required value={password} type="password"  placeholder="Digite sua senha"
                      onIonChange={e=> setPassword(e.detail.value)}/>  
                </IonItem>
                <IonButton expand="full" color="primary" type="submit"> Acessar </IonButton>
              </form>  
            </div>    
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login2;
  