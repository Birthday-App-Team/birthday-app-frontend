const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

//twilio requirements -- Texting API
const accountSid = "___YOUR___ACCOUNT__SID";
const authToken = "___YOUR___AUTHENTICATION__TOKEN";
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

//Twilio
app.get("/send-text", (req, res) => {
  //Welcome Message
  res.send("Hello to the Twilio Server");

  //_GET Variables
  const { recipient, textmessage } = req.query;

  //Send Text
  client.messages
    .create({
      body: textmessage,
      to: recipient, // Text this number
      from: "+441539234068" // From a valid Twilio number
    })
    .then(message => console.log(message.body));
});

app.listen(3000, () => console.log("Running on Port 4000"));

// const express = require("express");
// const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();
// const client = require("twilio")(
//   process.env.TWILIO_ACCOUT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.post("/api/messages", (req, res) => {
//   res.header("Content-Type", "application/json");
//   client.messages
//     .create({
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: req.body.to,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(JSON.stringify({ success: false }));
//     });
// });

// app.listen(3001, () =>
//   console.log("Express server is running on localhost:3001")
// );
