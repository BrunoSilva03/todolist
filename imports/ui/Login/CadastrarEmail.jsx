import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';

import './CadastrarEmail.module.css';

export default CadastrarEmail = ({ handleClose, submitEmail }) => {
  const [email, setEmail] = useState('');

  

  const handleSubmit = () => {
    if(email.trim() === '') {
      //Pra verificar se o email está vazio antes de enviar
      alert('Por favor, insira um email válido.');
    } else {
      console.log('Email a ser enviado: ', email);
      submitEmail(email);
      toast.success('Email de confirmação enviado, cheque sua caixa de entrada.');
      handleClose();
    }
  }
 
  //Modal do Bootstrap
  return (
    <>

      
        <div
          className="modal show"
          style={{ display: 'block', position: 'fixed', zIndex: '1' }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Insira seu Email</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="areaEmailCadastrar"
                style={{ textAlign: 'center' }}>

                <input type="email"
                   placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" className="btnCancelarEmail" onClick={handleClose}>Cancelar</Button>
              <Button variant="primary" onClick={handleSubmit}>Enviar</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>


    </>
  );
}