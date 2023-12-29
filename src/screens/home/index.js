import React from "react";
import Sidenav from "../../components/header";
import SobreMim from "../../components/sobremim";
import HistoricoProfissional from "../../components/historico_profissional";
import FormacaoAcademica from "../../components/formacao_academica";
import Competencias from "../../components/competencias";
import Cursos from "../../components/cursos";
import Projetos from "../../components/projetos";
import Formulario from "../../components/me_contrate/formulario";


const HomeScreen = () => {

    return(

        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      
      <div  style={{ width: '100%'}}>
      <ul > 
        <li ><Sidenav /></li> 
        <br/> 
        <br/> 
        <li><SobreMim /></li>       
        <li style={{ padding: '10px 0' }}><HistoricoProfissional /></li>       
        <li style={{ padding: '10px 0' }}><FormacaoAcademica /></li>      
        <li style={{ padding: '10px 0' }}><Competencias /></li>      
        <li style={{ padding: '10px 0' }}><Cursos /></li>      
        <li style={{ padding: '10px 0' }}><Projetos /></li>
      </ul>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      </div>
      

    </div>

    );
}

export default HomeScreen;