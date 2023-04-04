//Component to handle file upload elements
//Used in 'RunProjectPopup.tsx'

import "./FileUpload.css";


const FileUpload = () => {
    const uploadHandler = () => {}
    return (
        <div className = "file-card">
            <div className= "file-inputs">
                <input type="file" multiple accept=".txt" onChange={uploadHandler}/>
                <button>
                    Upload
                </button>
            </div>
            <p className="main">Upload .txt file</p>
        </div>
    )
};
export default FileUpload
