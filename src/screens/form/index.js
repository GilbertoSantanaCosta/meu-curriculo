import React from "react";
import Sidenav from "../../components/header";
import Formulario from "../../components/me_contrate/formulario";


const Form =()=> {

    return (
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      
      <div  style={{ width: '100%' , alignItems: 'left'}}>
      <ul > 
        <li > <Sidenav /></li> 
        <br/> 
        <br/> 
        <li  ><Formulario /></li>       
       
      </ul>  
      </div>

    </div>

    );
}

export default Form;