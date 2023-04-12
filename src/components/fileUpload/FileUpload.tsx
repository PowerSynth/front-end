//-------------------------------------------------------------------------------
//Component to handle file upload elements (upload box in popup, upload button)
//Used in 'RunProjectPopup.tsx'
//-------------------------------------------------------------------------------

import "./FileUpload.css";
import axios from "axios";

const FileUpload: React.FC<{files: any, setFiles: any, removeFiles: any}> = ({files, setFiles, removeFiles}) => {
    const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any;
        if(event.target.files != null){
            file = event.target.files[0];
        } else{
            console.log('empty');   
        }
        
        file.isUploading = true;
        setFiles([...files, file])

        //Upload File
        const formData = new FormData();
        formData.append(
            file.name,
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
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
                <input id="file-upload-form" type="file" multiple accept=".txt" onChange={uploadHandler}/>
                <button>
                    Upload
                </button>
            </div>
            <p className="main">Upload macro_script.txt file</p>
        </div> 
    )
};
export default FileUpload