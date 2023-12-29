import React from 'react';
import { Card, Title } from 'rbx';
import "rbx/index.css";

const FormacaoAcademica = () => {


  return (
    <Card className='formacao' id='formacao' style={{ margin: '5px' , borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)' }}>
      <Card.Content>
        <div>
          <Title as="p" size={4}>
            Formação acadêmica
          </Title>
          <hr style={{ borderStyle: "solid", height: "0px", color: "red", }} />
          <br />
          <strong>Tecnólogo: </strong> Gestão de Tecnologia da Informação
          <p></p>
          Estácio - Carapicuiba, São Paulo
        </div>
      </Card.Content>
    </Card>




  );
};

export default FormacaoAcademica;