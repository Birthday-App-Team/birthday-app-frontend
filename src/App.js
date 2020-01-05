import React from "react";
import "./App.css";
import AddPerson from "./Components/AddPerson";
import BirthdayList from "./Components/BirthdayList";
// // import PersonInfo from "./Components/PersonInfo";
// import CalendarOld from "./Components/CalendarOld";
import axios from "axios";
// import Calendar from "react-calendar";

class App extends React.Component {
  state = {
    birthdays: []
  };

  componentDidMount() {
    axios
      .get(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays"
      )
      .then(response => {
        const birthdaysFromDB = response.data;
        this.setState({
          birthdays: birthdaysFromDB
        });
      })
      .catch(err => {
        console.log("Error getting tasks data", err);
      });
  }

  addBirthday = (name, birthday, note) => {
    const birthdaysCopy = this.state.birthdays.slice();
    const newBirthday = {
      name: name,
      date_of_birth: birthday,
      interests: note
    };

    axios
      .post(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays",
        newBirthday
      )
      .then(response => {
        console.log("this is response:", response);

        const birthdayFromDB = response.data;
        birthdaysCopy.push(birthdayFromDB);
        this.setState({
          birthdays: birthdaysCopy
        });
        console.log(birthdaysCopy);
      })
      .catch(err => {
        console.log("Error creating birthday", err);
      });
  };

  deleteBirthday = id => {
    axios
      .delete(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays/" +
          id
      )
      .then(response => {
        console.log("this is response:", response);
        const birthdaysNotDel = this.state.birthdays.filter(birthday => {
          return birthday.birthdayID !== id;
        });
        this.setState({
          birthdays: birthdaysNotDel
        });
        console.log(this.state.birthdays);
      })
      .catch(err => console.log("Error deleting birthday", err));
  };

  editBirthday = (id, newNote, name, DOB) => {
    const editedBirthday = {
      name: name,
      date_of_birth: DOB,
      interests: newNote
    };
    axios
      .put(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays/" +
          id,
        editedBirthday
      )
      .then(response => {
        const updatedBirthdays = this.state.birthdays.map(birthday => {
          console.log(response);
          if (birthday.birthdayID === id) {
            birthday.interests = newNote;
            birthday.name = name;
            birthday.date_of_birth = DOB;
          }
          return birthday;
        });
        this.setState({
          birthdays: updatedBirthdays
        });
      })
      .catch(err => console.log("Error editing task", err));
  };

  onDayClick = (e, day, m, y) => {
    alert(day + m + y);
    console.log(day + this.state.birthdays);
  };

  calendarDisplay = (date, view) => {
    console.log("birthdays = " + this.state.birthdays);
    const birthdaysOnDay = this.state.birthdays.filter(birthday => {
      console.log("Name is " + birthday.name);
      return date.getMonth() === birthday.date_of_birth.getMonth();
    });
    console.log("bdays " + birthdaysOnDay);
    if (view === "month" && date.getDay() === 0)
      console.log(birthdaysOnDay.name);
    else {
      return <p>hi</p>;
    }
  };

  render() {
    return (
      <div className=" App">
        <AddPerson addBirthdayFunc={this.addBirthday} />
        <h1>
          <span className="h1Letter">Birthday App</span>
        </h1>{" "}
        <br></br>
        {/* <Calendar
          tileContent={this.calendarDisplay}
          onDaySelected={this.onDayClick}
        /> */}
        {/* <CalendarOld
          className="calenderStyle calendar-container"
          onDayClick={(e, day, m, y) => this.onDayClick(e, day, m, y)}
        /> */}
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
                  text={birthday.interests}
                  name={birthday.name}
                  key={birthday.birthdayID}
                  id={birthday.birthdayID}
                  dateOfBirth={birthday.date_of_birth}
                  editBirthdayFunc={this.editBirthday}
                  deleteBirthdayFunc={this.deleteBirthday}
                />
              );
            })}
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
