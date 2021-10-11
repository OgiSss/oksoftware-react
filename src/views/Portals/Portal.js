import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Backdrop/Modal';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3f51b5; /* Green */
  border: none;
  color: white;
  padding: 11px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

const Portal = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeHandler = () => {
        setOpenModal(false);
    }

    const openHandler = () => {
        setOpenModal(true);
    }

    return (
        <Fragment>
            {openModal && (ReactDOM.createPortal(<Modal onClose={closeHandler} />, document.getElementById('modal')))}
            <Button type="submit" onClick={openHandler}>Open modal</Button>
        </Fragment>
    )
}

export default Portal;