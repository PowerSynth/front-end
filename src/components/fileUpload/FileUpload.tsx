//-------------------------------------------------------------------------------
//Component to handle file upload elements (upload box in popup, upload button)
//Used in 'RunProjectPopup.tsx'
//-------------------------------------------------------------------------------

import "./FileUpload.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button } from "@blueprintjs/core";
import axios from "axios";
import FileDownload from "js-file-download";

const FileUpload: React.FC<{files: any, setFiles: any}> = ({files, setFiles}) => {
    const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any;
        if(event.target.files != null){
            file = event.target.files[0];
        } else{
            console.log('empty');
        }
        
        // file.isUploading = true;
        setFiles([...files, file])
        console.log(file)

        file.isUploading = false;
        setFiles([...files, file])
  
    }
    return (
        <div className = "file-card">
            <div className= "file-inputs">
                <input id="file-upload-form" type="file" accept=".zip" onChange={uploadHandler}/>
                <button>
                    Upload
                </button>
            </div>
            <p className="main">Upload macro_script.txt file</p>
        </div>
    )
};
export default FileUpload
