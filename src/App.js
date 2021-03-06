import React from "react";
import BirthdayList from "./Components/BirthdayList";
import AddPerson from "./Components/AddPerson";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
import moment from "moment";
import Search from "./Components/Search";

class App extends React.Component {
  state = {
    birthdays: [],
    search: ""
  };

  //GET
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

  // calculates "nextBirthday" and "nextAge" and adds to the state as new properties
  calcNextBirthdayAndAge = birthdays => {
    const nextBirthdays = birthdays.map(birthday => {
      const dobMoment = moment(birthday.date_of_birth);
      const nowMoment = moment().startOf("day");
      const nextAge = nowMoment.diff(birthday.date_of_birth, "years") + 1;
      birthday.nextAge = nextAge;
      birthday.nextBirthday = dobMoment.add(nextAge, "years");
      return birthday;
    });
    return nextBirthdays;
  };

  // checks for any birthdays that are today and adds "isBirthdayToday = true/false" to the state as new property
  identifyBirthdaysToday = birthdays => {
    const nextBirthdays = birthdays.map(birthday => {
      const nowMoment = moment().format("MM-DD");
      const nextBirthday = birthday.nextBirthday.format("MM-DD");
      birthday.isBirthdayToday = false;
      if (nowMoment === nextBirthday) {
        birthday.isBirthdayToday = true;
        birthday.nextBirthday = birthday.nextBirthday.subtract(1, "years");
        birthday.nextAge = birthday.nextAge - 1;
      }
      return birthday;
    });
    return nextBirthdays;
  };

  // sorts birthdays in order of next up birthday (sorting "nextBirthday" - a moment object)
  sortBirthdays = birthdays => {
    birthdays.sort((a, b) => {
      return a.nextBirthday.isAfter(b.nextBirthday) ? 1 : -1;
    });
    return birthdays;
  };

  //saves search value as state
  search = e => {
    this.setState({
      search: e
    });
  };

  //filters birthday list
  searchBirthdays = birthdays => {
    if (this.state.search === "") {
      return birthdays;
    } else {
      let filteredBirthdays = birthdays.filter(birthday => {
        return birthday.name.toLowerCase().indexOf(this.state.search) !== -1;
      });

      console.log(filteredBirthdays);
      return filteredBirthdays;
    }
  };

  // DELETE
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

  // POST
  addBirthday = (name, birthday, note, number, checked, message, toggle) => {
    const birthdaysCopy = this.state.birthdays.slice();
    const newBirthday = {
      name: name,
      date_of_birth: birthday,
      interests: note,
      phone_number: number,
      send_message: checked,
      birthday_message: message
    };
    if (
      moment(birthday).format("MM-DD") === moment().format("MM-DD") &&
      toggle === false
    ) {
      axios.post(
        "https://46m3x72wmb.execute-api.eu-west-2.amazonaws.com/dev/send",
        {
          recipient_name: name,
          recipient_phone_number: number,
          message: message,
          from_phone_number: "+447506190696"
        }
      );
    }
    axios
      .post(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays",
        newBirthday
      )
      .then(response => {
        const birthdayFromDB = response.data;
        birthdaysCopy.push(birthdayFromDB);
        this.setState({
          birthdays: birthdaysCopy
        });
      })
      .catch(err => {
        console.log("Error creating birthday", err);
      });
  };

  // PUT
  editBirthday = (id, name, DOB, newNote, number, checked, message) => {
    // let previousBirthday;
    const editedBirthday = {
      name: name,
      date_of_birth: DOB,
      interests: newNote,
      phone_number: number,
      send_message: checked,
      birthday_message: message
    };
    axios
      .put(
        "https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays/" +
          id,
        editedBirthday
      )
      .then(response => {
        console.log(editedBirthday);
        const updatedBirthdays = this.state.birthdays.map(birthday => {
          // console.log(response);
          if (birthday.birthdayID === id) {
            // previousBirthday = birthday.date_of_birth;
            birthday.interests = newNote;
            birthday.name = name;
            birthday.date_of_birth = DOB;
            birthday.phone_number = number;
            birthday.send_message = checked;
            birthday.birthday_message = message;
          }
          return birthday;
        });
        this.setState({
          birthdays: updatedBirthdays
        });
      })
      .catch(err => console.log("Error editing task", err));
  };

  render() {
    return (
      <div className="App ">
        {/* ROW 1 */}
        <div className="row">
          <div className="col-2">
            <AddPerson addBirthdayFunc={this.addBirthday} />
          </div>
          <div className="col-10">
            <img
              src={logo}
              alt="birthdaze logo"
              className="logo"
              width="233"
              height="87"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="col-12">
            <Search startSearchFunc={this.search} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row">
          <div className="col-12">
            <hr className="rule" />
            {this.searchBirthdays(
              this.sortBirthdays(
                this.identifyBirthdaysToday(
                  this.calcNextBirthdayAndAge(this.state.birthdays)
                )
              )
            ).map(birthday => {
              return (
                <BirthdayList
                  name={birthday.name}
                  dateOfBirth={birthday.date_of_birth}
                  text={birthday.interests}
                  number={birthday.phone_number}
                  key={birthday.birthdayID}
                  id={birthday.birthdayID}
                  nextBirthday={birthday.nextBirthday}
                  nextAge={birthday.nextAge}
                  isBirthdayToday={birthday.isBirthdayToday}
                  editBirthdayFunc={this.editBirthday}
                  deleteBirthdayFunc={this.deleteBirthday}
                  message={birthday.birthday_message}
                  checkbox={birthday.send_message}
                />
              );
            })}
            <hr className="rule" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
