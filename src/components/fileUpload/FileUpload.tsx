//-------------------------------------------------------------------------------
//Component to handle file upload elements (upload box in popup, upload button)
//Used in 'RunProjectPopup.tsx'
//-------------------------------------------------------------------------------

import "./FileUpload.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button } from "@blueprintjs/core";
import axios from "axios";
import FileDownload from "js-file-download";

const FileUpload: React.FC<{files: any, setFiles: any, removeFiles: any}> = ({files, setFiles, removeFiles}) => {
    const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any;
        if(event.target.files != null){
            file = event.target.files[0];
        } else{
            console.log('empty');
        }

        // file.isUploading = true;
        setFiles([...files, file])

        //Upload File
        const formData = new FormData();
        // formData.append(
        //     file.name,
        //     file,
        //     file.name
        // )
        formData.append("file", file)
        axios.post('http://localhost:8080/upload', formData, {headers:{"Content-Type": "multipart/form-data"}})
        .then((res: any) => {
            file.isUploading = false;
            setFiles([...files, file])
        })
        .catch((err: any) => {
            console.log(err)
            removeFiles(file.name)
        })
    }
    return (
        <div className = "file-card">
            <div className= "file-inputs">
                <input id="file-upload-form" type="file" accept=".txt" onChange={uploadHandler}/>
                <button>
                    Upload
                </button>
            </div>
            <p className="main">Upload macro_script.txt file</p>
        </div>
    )
};
export default FileUpload