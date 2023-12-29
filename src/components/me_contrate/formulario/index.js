import React from "react";
import {Field , Label , Control , Input, Icon,  Button , Help, Select, Radio , Textarea  } from 'rbx';




function Formulario() {

    return (
        <div className="me_contrate" id="me_contrate" style={{  margin: '5px' , borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0,0, 0.60)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
        <form  style={{ width: '80%', padding: '20px 0'  }}>
            <Field horizontal>
                
                <Field.Body>
                    <Field>
                        <Control expanded iconLeft>
                            <Input type="text" placeholder="Nome" />
                            <Icon size="small" align="left">
                               
                            </Icon>
                        </Control>
                    </Field>
                    <Field>
                        <Control expanded iconLeft iconRight>
                            <Input
                                color="success"
                                
                                placeholder="E-mail"
                                type="email"
                            />
                            <Icon size="small" align="left">
                               
                            </Icon>
                            <Icon size="small" align="right">
                               
                            </Icon>
                        </Control>
                    </Field>
                </Field.Body>
            </Field>
            <Field horizontal>
               
                <Field.Body>
                    <Field expanded>
                        <Field kind="addons">
                            <Control>
                                <Button static>+55</Button>
                            </Control>
                            <Control expanded>
                                <Input type="tel" placeholder="Digite seu telefone com DDD" />
                            </Control>
                        </Field>
                        
                    </Field>
                </Field.Body>
            </Field>
            <Field horizontal>
                
                <Field.Body>
                    <Field>
                        <Control>
                            <Textarea placeholder="Como posso ajuda-lo" />
                        </Control>
                    </Field>
                </Field.Body>
            </Field>

            <Field horizontal>
                
                <Field.Body>
                    <Field>
                        <Control>
                            <Button color="primary">Enviar</Button>
                        </Control>
                    </Field>
                </Field.Body>
            </Field>
        </form>
        <br/>
        <br/>
        </div>
    );
}

export default Formulario;