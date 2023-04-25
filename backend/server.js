//------------------------------------------------------------------------------------------------------------
// Simple backend file to handle uploading/deleting initial files and retreiving results
// running for file handling to work To Run: node server.js
//------------------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());

//Temporary json object to store files uploaded by user
var uploadFiles = {};


mainPath = '../../tempFolder/';

//Running PowerSynth request; creating files in folder to run w/ CLI
//Call CLI from here?
app.post("/api/powersynth", (req, res) => {
  uploadFiles[req.files["file"]["name"]] = req.files["file"]
  console.log(`${req.files["file"]["name"]} uploaded`);
  console.log(req.files)
  // console.log(files)
  //Handle no files uploaded
  if (uploadFiles == {}) {
    console.log("you didn't upload the macro script!");
    return res.status(200).json({ result: true, msg: "You didn't upload macro script!" });
  }
  //Create file(s) in folder, currently commented out so it doesn't create files every time during testing
  for (var key in uploadFiles) {
    //uploadFiles[key].mv(mainPath+`${uploadFiles[key]["name"]}`)
  }
  //Remove file(s) from temporary json object
  for (var key in uploadFiles) {
    delete uploadFiles[key];
  }
  return res.status(200).json({ result: true, msg: "Running PowerSynth", results: req.files});
 
})

app.get("/download", (req, res) => {
  res.download("../src/components/solutionBrowser/testImages/initial_layout_l1.png");
})

// Running file on port 8080
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
