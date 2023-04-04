//Component to create file upload popup
//Used in 'RunProjectPopupWrapper.tsx'

import React, { useState } from 'react'
import ReactDOM from "react-dom";
import "./RunProjectPopup.css"
import FileUpload from "./FileUpload";


interface ModalProps {
    onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({onBackdropClick}) => {
    return ReactDOM.createPortal(
    <div id = "ModalDiv" onClick={onBackdropClick}>
        <div id='ModalContainer' onClick={e => e.stopPropagation()}>
            <p className="title">Upload file</p>
            <FileUpload />
        </div>
    </div>,
    document.getElementById('WelcomePage')!);
}

export default Modal
