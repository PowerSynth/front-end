//-----------------------------------------
//Component to create file upload popup
//Used in 'RunProjectPopupWrapper.tsx'
//-----------------------------------------

import React, {useState} from 'react'
import ReactDOM from "react-dom";
import "./RunProjectPopup.css"
import FileUpload from "./FileUpload";
import FileList from "./FileList"

interface ModalProps {
    onBackdropClick: () => void;
}

  const Modal: React.FC<ModalProps> = ({ onBackdropClick }) => {
    const [files, setFiles] = useState<{ name: string }[]>([]);
    console.log(files);

    //Remove file function
    const removeFile = (filename: any) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    //To be implemented -- button will start process on backend
    const handleRunProject = () => {
        console.log("Clicking Run Project")
    }

    return ReactDOM.createPortal(
      <div id="ModalDiv" onClick={onBackdropClick}>
        <div id="ModalContainer" onClick={(e) => e.stopPropagation()}>
            <div id="title">
              <p>Run a Project</p>
            </div>
            <FileUpload files={files} setFiles={setFiles} removeFiles={removeFile}/>
            <FileList files={files} removeFiles={removeFile} />
              <div className="button-options-container">
                  <button onClick={handleRunProject}>Run Project</button>
                  <button onClick={onBackdropClick}>Cancel</button>
              </div>
        </div>
      </div>,
      document.getElementById('WelcomePage')!
    );
  };
export default Modal
