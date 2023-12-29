import React from 'react';
import { Card, Title , Button } from 'rbx';
import "rbx/index.css";



const Projetos = () => {


  return (

    <Card className='projetos' id='projetos' style={{ margin: '5px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)'}}> 
      <Card.Content>
        <div style={{  justifyContent: 'center' }}>
          <Title as="p" size={4}>
            Projetos
          </Title>
          <hr style={{ borderStyle: "solid", height: "0px", color: "red", }} />
          <br />
          <ul>
            <li> <a href="https://dsvendas-gilbertosantana.netlify.app/"> <Button color='danger'> DashBoard De Vendas </Button> </a>  </li><br/>
            <li> <a href='https://github.com/GilbertoSantanaCosta/curso-spring-backend'> <Button color='danger'> API REST Sistema de Vendas </Button></a> </li> <br/>
            <li> <a href='https://github.com/GilbertoSantanaCosta/Todo-API'> <Button color='danger'> Sistema de Cadastros </Button></a></li><br/>
            <li> <a href='https://github.com/GilbertoSantanaCosta/JogoDaVelha'> <Button color='danger'> Jogo da Velha Desktop </Button> </a></li>
          </ul>
        </div>
      </Card.Content>
    </Card>




  );
};

export default Projetos;