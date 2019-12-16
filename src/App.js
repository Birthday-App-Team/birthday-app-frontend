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
        extend: false,
        id: uuid()
      },
      {
        name: "Akshay",
        DOB: "1997-04-23",
        gender: "M",
        notes: "Akshay like bollywood movies and lager",
        extend: false,
        id: uuid()
      },
      {
        name: "Tommy",
        DOB: "1995-01-06",
        gender: "M",
        notes: "Tommy collects Marvel figurines",
        extend: false,
        id: uuid()
      },
      {
        name: "Barbara",
        DOB: "2009-03-25",
        gender: "NB",
        notes: "Barbara loves Disney and playing football",
        extend: false,
        id: uuid()
      },
      {
        name: "Oscar",
        DOB: "1956-09-01",
        gender: "NB",
        notes:
          "Oscar goes ballroom dancing twice a week. He mentioned needing a new hat",
        extend: false,
        id: uuid()
      }
    ]
  };

  showBirthdays = id => {
    const birthdays = this.state.tasks.map(task => {
      return task;
    });
    return birthdays;
  };

  // findAge =

  render() {
    console.log(this.state.birthdays.name);
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
            {this.state.birthdays.map(birthday => {
              return (
                <BirthdayList
                  text={birthday.notes}
                  name={birthday.name}
                  key={birthday.id}
                  id={birthday.TaskID}
                  dateOfBirth={birthday.DOB}
                  dropdown={birthday.extend}
                />
              );
            })}
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
