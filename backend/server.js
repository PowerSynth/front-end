//------------------------------------------------------------------------------------------------------------
// Simple backend file to handle uploading/deleting initial files and retreiving results
// running for file handling to work To Run: node server.js
//------------------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());

//Temporary json object to store files uploaded by user
var files = {};

//Temporary json object to store result files received by backend
var solutionFiles = {}

//Path to folder where files uploaded will be stored for PowerSynth to run
//This assumes that power-synth-web will be stored in public_html
//gets out of public_html to store files in a temp folder, and will change as needed
//when running on local machine, will need a 'tempFolder' in same location as power-synth-web folder
mainPath = '../../tempFolder/';

//Uploading file: file user uploads is uploaded to the temporary files object
//Stores files until user decides to run powersynth or cancel
app.post("/upload", (req, res) => {
  setTimeout(() => {
    //Adding uploaded file to the files object
    files[req.files["file"]["name"]] = req.files["file"]
    console.log(`${req.files["file"]["name"]} uploaded`);
    console.log(files)
    return res.status(200).json({ result: true, msg: "file uploaded" });
  });
});

//Deleting file: deletes the file that the user specifies to delete in the run powersynth popup
//Also used to delete all files from the folder they were uploaded into is user hits cancel before running, which
//Might not be necessary since they are only uploaded when PowerSynth is run
app.post("/delete", (req, res) => {
  console.log(`Deleting file ${req.body.name}`);
  // console.log(files);
  //Case where entire operation is being cancelled, all files need to be removed
  if (req.body.name == "**delete-all-files**"){ 
    //Looping through all files and removing them from folder if they exist -- may not be necessary
    for (var key in files) {
      try {
        filePath = mainPath + `${files[key]["name"]}`;
        fs.unlinkSync(filePath);
      } catch {
        console.log(`${files[key]["name"]} doesn't exist in folder, emptying temporary object`);
      }
    }
    //Removing all files from the temporary files object
    files = {}
    console.log(files);
  } else {
    //Case where user wanted to remove a single file they uploaded
    delete files[req.body.name];
  }
  return res.status(200).json({ result: true, msg: `${req.body.name} deleted` });
})

//Running PowerSynth request; creating files in folder to run w/ CLI
//Call CLI from here?
app.post("/runPowerSynth", (req, res) => {
  console.log("Running PowerSynth")
  // console.log(files)
  //Handle no files uploaded
  if (files == {}) {
    console.log("you didn't upload the macro script!");
    return res.status(200).json({ result: true, msg: "You didn't upload macro script!" });
  }
  //Create file(s) in folder, currently commented out so it doesn't create files every time during testing
  for (var key in files) {
    //files[key].mv(mainPath+`${files[key]["name"]}`)
  }
  //Remove file(s) from temporary json object
  for (var key in files) {
    delete files[key];
  }
  return res.status(200).json({ result: true, msg: "Running PowerSynth" });
})

//Post made by backend to send results to the front end after CLI is finished running
app.post("/sendResults", (req, res) => {
  // console.log(req.files);
  solutionFiles[req.files["file"]["name"]] = req.files["file"]
  return res.status(200).json({ result: true, files: solutionFiles});
});

//Get results from the results from temporary solutionFiles json object
app.get("/getResults", (req, res) => {
  console.log("retrieving results");
  return res.status(200).json({ result: true, files: solutionFiles });
})

// Running file on port 8080
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
