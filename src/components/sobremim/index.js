import React from 'react';
import { Card, Image, Media, Title, Content } from 'rbx';
import download from './IMG_20210924_212942.jpg'


const SobreMim = () => {


  return (

    <div>
  <Card className="inicio" id="inicio" style={{ margin: "5px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.60)" }}>
    <Card.Content>
      <Media>
        <Media.Item as="figure" align="left">
          <Image.Container as="p" size={128}>
            <Image rounded src={download} />
          </Image.Container>
        </Media.Item>
        <Media.Item>
          <Title as="p" size={3}>Gilberto Santana da Costa</Title>
          <Title as="p" subtitle size={5}>Desenvolvedor Full Stack</Title>
        </Media.Item>
      </Media>
      <br />
      <Content>
        <div >
          Carapicuiba, SP | (11) 98674-9182 | g.s.d.c@hotmail.com
          <br />
          GitHub: https://github.com/GilbertoSantanaCosta
        </div>
      </Content>
    </Card.Content>
  </Card>
  
</div>



  );
};

export default SobreMim;