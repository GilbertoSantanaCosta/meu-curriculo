import React from 'react';
import { Card , Title} from 'rbx';
import "rbx/index.css";

const HistoricoProfissional = () => {
    
  
    return (
     
      <Card className='profissional' id='profissional' style={{ margin: '5px' , borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)'}}>
        <Card.Content>
      
      <div>
      <Title as="p" size={4}>
      Histórico Profissional
      </Title>
      <hr style={{ borderStyle: "solid", height: "0px" , color: "red",  }}/>
      <br/>
      <strong>Desenvolvedor Backend</strong>
      <br/>
      <strong>Flamacar</strong>
      <br/>
      <ul>
        <li>Principais atividades: Desenvolvimento de uma API REST para cadastro e gerenciamento do fluxo de veículos e entrega de peças registradas na oficina com acesso remoto</li>
        <li>Tecnologias Utilizadas: Linguagem Java versão 1.8 / Framework Spring Boot versão 2.4.8 / Banco de Dados MySQL</li>
      </ul>
      <br/>
      <strong>Desenvolvedor</strong>
      <br/>
      <strong>Flamacar</strong>
      <br/>
      <ul>
        <li>Principais atividades: Desenvolvimento de um sistema de cadastro de clientes com acesso de gerenciamento na rede local</li>
        <li>Tecnologias Utilizadas: Linguagem Java versão 1.8 / Framework Hibernate / Banco de dados MySQL / Servidor Tomcat
        / Geração de paginas JSP (Java Server Pages)
        </li>
      </ul>
      <br/>
      <strong>Supervisor de orçamento </strong>
      <br/>
      <strong>Flamacar</strong>
      <br/>
      <ul>
        <li>Principais atividades: Elaboração e supervisão de orçamentos, controle e administração do fluxo de veículos e vistorias de sinistros automotivos .</li>
      </ul>

      </div>
      </Card.Content>
      </Card>
    
      
    );
  };
  
  export default HistoricoProfissional;