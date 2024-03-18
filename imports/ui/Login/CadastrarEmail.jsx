import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import './CadastrarEmail.module.css';

export default CadastrarEmail = ({ handleClose, submitEmail }) => {
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState(true);

  const fecharPopUp = () => {
    setPopup(false);
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
              <Button variant="primary" onClick={submitEmail}>Enviar</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>


    </>
  );
}