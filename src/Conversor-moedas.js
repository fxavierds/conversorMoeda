import React, { useState } from 'react';
import './Conversor-moedas.css';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './Listar-moedas';

function ConversorMoedas() {
  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);

  function handleValor(event){
    setValor(event.target.value.replace(/\D/g, ''));
  }

  function handleMoedaDe(event){
    setMoedaDe(event.target.value);
  }

  function handleMoedaPara(event){
    setMoedaPara(event.target.value);
  }
  return (
    <div>
        <h1>Conversor Moedas</h1>
        <Alert variant="danger" show={false}>
          Erro obtendo dados para conversão
        </Alert>
        <Jumbotron>
          <Form>
            <Form.Row>
              <Col sm="3">
                <Form.Control placeholder="0"
                  value={valor} required
                  onChange={handleValor}
                />
              </Col>
              <Col sm="3">
                <Form.Control as="select"
                  value={moedaDe} 
                  onChange={handleMoedaDe}
                >
                      <ListarMoedas/>
                </Form.Control>
              </Col>
              <Col sm="1" className="text-center" sytle={{paddingTop:'5px'}}>
                <FontAwesomeIcon icon={faAngleDoubleRight}/>
              </Col>
              <Col sm="3">
                  <Form.Control as="select"
                     value={moedaPara} 
                     onChange={handleMoedaPara}
                   >
                    <ListarMoedas/>
                  </Form.Control>
              </Col>
              <Col sm="2">
                <Button variant="success" type="submit">
                  <span className={exibirSpinner ? null : 'hidden'}>
                    <Spinner animation="border" size="sm"/>
                  </span>
                  <span className={exibirSpinner ? 'hidden' : null}>
                      Conversor
                  </span>                 
                </Button>
              </Col>
            </Form.Row>
          </Form>
          <Modal show={false}>
            <Modal.Header closeButton>
              <Modal.Title>Conversor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Resultado conversão
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success">
                Nova Conversão
              </Button>
            </Modal.Footer>
          </Modal>
        </Jumbotron>
    </div>
    
  );
}

export default ConversorMoedas;
