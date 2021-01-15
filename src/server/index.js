var path = require("path");
const express = require("express");
//const mockAPIResponse = require('./mockAPI.js')

const app = express();

app.use(express.static("dist"));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
console.log(__dirname);

const fetch = require("node-fetch");

//API CREDENTIALS
const APIKey = "d29134ff7fe20e0f5823675527f9503c";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});

app.post("/Apidata", async (request, response) => {
  console.log("loool");
  let data;
  let input = request.body.text;
  console.log(request.body.text);
  const res = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${APIKey}&of=json&txt=${request.body.text}&lang=en`
  );
  console.log(res);
  try {
     data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
  console.log(res);
  let obj = {
    subjectivity: data.subjectivity,
    polarity: data.score_tag,
    confidence: data.confidence,
    agreement:data.agreement,

  };
response.status(200).json(obj);
  
});

app.get("/", (request, response) => {
  response.sendFile("dist/index.html");
});
