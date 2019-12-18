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
        id: 1
      },
      {
        name: "Akshay",
        DOB: "1997-04-23",
        gender: "M",
        notes: "Akshay like bollywood movies and lager",
        extend: false,
        id: 2
      },
      {
        name: "Tommy",
        DOB: "1995-01-06",
        gender: "M",
        notes: "Tommy collects Marvel figurines",
        extend: false,
        id: 3
      },
      {
        name: "Barbara",
        DOB: "2009-03-25",
        gender: "NB",
        notes: "Barbara loves Disney and playing football",
        extend: false,
        id: 4
      },
      {
        name: "Oscar",
        DOB: "1956-09-01",
        gender: "NB",
        notes:
          "Oscar goes ballroom dancing twice a week. He mentioned needing a new hat",
        extend: false,
        id: 5
      }
    ]
  };

  showBirthdays = id => {
    const birthdays = this.state.tasks.map(task => {
      return task;
    });
    return birthdays;
  };

  //

  undoTask = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = false;
      }

      return task;
    });

    this.setState({
      tasks: updatedTasks
    });
  };

  editBirthday = (id, newBirthday) => {
    console.log("hello");
    if (newBirthday === "") {
      return;
    }
    const birthdaysCopy = this.state.birthdays.slice();
    birthdaysCopy.forEach(birthday => {
      if (birthday.id === id) {
        console.log("there");
        birthday.notes = newBirthday;
      }
    });
    console.log(birthdaysCopy);
    this.setState({
      birthdays: birthdaysCopy
    });
  };

  render() {
    console.log(this.state.birthdays.name);
    return (
      <div className=" App">
        <AddPerson />
        <h1>
          <span className="h1Letter">Birthday App</span>
          <span className="list">
            <u></u>
          </span>
        </h1>{" "}
        <br></br>
        <div className="row">
          <div className="col-12">
            <br></br>
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
                  id={birthday.id}
                  dateOfBirth={birthday.DOB}
                  dropdown={birthday.extend}
                  editBirthdayFunc={this.editBirthday}
                />
              );
            })}
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <PersonInfo Notes={this.state.birthdays.notes} />
          </div>
        </div> */}
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
