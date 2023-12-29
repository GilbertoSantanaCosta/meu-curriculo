import React from 'react';
import { Card, Title } from 'rbx';
import "rbx/index.css";


const Competencias = () => {


  return (

    <Card className='competencias' id='conpetencias' style={{ margin: '5px' , borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)' }} >
      <Card.Content>
        <Title as="p" size={4}>
          Competências
        </Title>
        <hr style={{ borderStyle: "solid", height: "0px", color: "red", }} />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }} >
            <strong>IDEs: </strong> Eclipse , NetBeans, Visual Studio
            <p />
            <strong>Linguagem: </strong> Java
            <p />
            <strong>Banco de Dados: </strong> MySql
            <p />
          </div >
          <div style={{ flex: 1 }}>
            <strong>Framework: </strong> Spring Boot
            <p />
            <strong>Framework: </strong>Desenvolvimento Web: Html , CSS , JavaScript, React
          </div>
        </div>
      </Card.Content>
    </Card>





  );
};

export default Competencias;