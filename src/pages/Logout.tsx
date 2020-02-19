import React from 'react';
import { Redirect } from 'react-router-dom';

 const Logout: React.FC=  () => { 
      
    return(
        <Redirect push={true} to="/login"/> 
        );
}


export default Logout;