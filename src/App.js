import React from "react";
import uuid from "uuid/v4";
import "./App.css";
import moment from "moment";
import AddPerson from "./Components/AddPerson.js";
import BirthdayList from "./Components/BirthdayList";
import PersonInfo from "./Components/PersonInfo";
class App extends React.Component {
  state = {
    birthdays: [
      {
        name: "Jane",
        DOB: "1976-12-12",
        gender: "NB",
        notes: "Jane loves water skiing and karate",
        id: uuid()
      },
      {
        name: "Akshay",
        DOB: "197-04-23",
        gender: "M",
        notes: "Akshay like bollywood movies and lager",
        id: uuid()
      },
      {
        name: "Tommy",
        DOB: "1995-01-06",
        gender: "M",
        notes: "Tommy collects Marvel figurines",
        id: uuid()
      },
      {
        name: "Barbara",
        DOB: "2009-03-25",
        gender: "NB",
        notes: "Barbara loves Disney and playing football",
        id: uuid()
      },
      {
        name: "Oscar",
        DOB: "1956-09-01",
        gender: "NB",
        notes:
          "Oscar goes ballroom dancing twice a week. He mentioned needing a new hat",
        id: uuid()
      }
    ]
  };

  render() {
    return (
      <div className=" App">
        <h1>
          <span className="h1Letter">Happy Birthday App!</span>
          <span className="list">
            <u></u>
          </span>
        </h1>
        <h6>The joy of getting older!</h6>
        <br></br>
        <div className="row">
          <div className="col-12">
            <br></br>
            <AddPerson />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BirthdayList name={this.state.birthdays.name} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <PersonInfo Notes={this.state.birthdays.notes} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
