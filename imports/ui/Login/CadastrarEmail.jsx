import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

export default CadastrarEmail = () => {
    const [email, setEmail] = useState('');

    //Modal do Bootstrap
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'fixed', zIndex: '1' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Insira seu Email</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="areaEmailCadastrar"
            style={{textAlign: 'center'}}>

                <input type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}