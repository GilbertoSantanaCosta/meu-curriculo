import React from 'react';
import { Card, Title } from 'rbx';
import "rbx/index.css";

const Cursos = () => {


  return (

    <Card className='cursos' id='cursos' style={{ margin: '5px' , borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)'}} >
      <Card.Content>
        <div >
          <Title as="p" size={4}>
            Cursos
          </Title>
          <hr style={{ borderStyle: "solid", height: "0px", color: "red", }} />
          <br />
          <strong>Java Programmer </strong> - completo
          <br />
          <strong>Impacta Sql Server - </strong> Completo
          <br />
          <strong>Impacta Projeto full stack </strong>  - Completo
          <br />
          <strong>Udemy Ingles </strong>  - Cursando
        </div>
      </Card.Content>
    </Card>




  );
};

export default Cursos;