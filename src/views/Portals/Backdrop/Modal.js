import React from "react";
import './Modal.css';

const Modal = (props) => {
    return (
        <div className="modal">

            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
    )
}

export default Modal;