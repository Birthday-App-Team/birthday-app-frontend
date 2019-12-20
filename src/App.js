import React from "react";
import "./App.css";
import AddPerson from "./Components/AddPerson";
import BirthdayList from "./Components/BirthdayList";
// import PersonInfo from "./Components/PersonInfo";
import Calendar from "./Components/Calendar";

class App extends React.Component {
  state = {
    birthdays: [
      {
        name: "Jane",
        DOB: "1976-12-12",
        gender: "NB",
        notes: "Jane loves water skiing and karate",
        id: 1
      },
      {
        name: "Akshay",
        DOB: "1997-04-23",
        gender: "M",
        notes: "Akshay like bollywood movies and lager",
        id: 2
      },
      {
        name: "Tommy",
        DOB: "1995-01-06",
        gender: "M",
        notes: "Tommy collects Marvel figurines",
        id: 3
      },
      {
        name: "Barbara",
        DOB: "2009-03-25",
        gender: "NB",
        notes: "Barbara loves Disney and playing football",
        id: 4
      },
      {
        name: "Oscar",
        DOB: "1956-09-01",
        gender: "NB",
        notes:
          "Oscar goes ballroom dancing twice a week. He mentioned needing a new hat",
        id: 5
      }
    ]
  };
  // addBirthday = (name, birthday, gender, birthdayText,) => {
  //   const newBirthday = {
  //     Text: taskText,
  //     Completed: false,
  //     DateCreated: moment().format("dddd, MMMM Do YYYY"),
  //     DateDue: dueByDate,
  //     UserId: 1
  //     // TaskId: uuid()
  //   };

  //   const tasksCopy = this.state.tasks.slice();

  //   axios
  //   .post(
  //     "https://",
  //     newBirthday
  //   )
  //   .then(response => {
  //     console.log(response);
  //     const birthdayFromDB = response.data;
  //     tasksCopy.push(birthdayFromDB);

  //     this.setState({
  //       tasks: tasksCopy
  //     });
  //   })
  //   .catch(err => console.log("Error creating task", err));
  // };

  // deleteTask = id => {
  //   axios
  //     .delete(
  //       "https://cr5ghnlv41.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + id
  //     )
  //     .then(response => {
  //       console.log(response);
  //       const tasksNotDel = this.state.tasks.filter(task => {
  //         return task.id !== id;
  //       });
  //       this.setState({
  //         tasks: tasksNotDel
  //       });
  //     })
  //     .catch(err => console.log("Error deleting task", err));
  // };

  addBirthday = (name, birthday, note, gender) => {
    const newBirthday = {
      name: name,
      DOB: birthday,
      gender: gender,
      notes: note,
      extend: false,
      id: this.state.birthdays.length + 1
    };
    const birthdaysCopy = this.state.birthdays.slice();
    birthdaysCopy.push(newBirthday);
    console.log(birthdaysCopy);
    this.setState({
      birthdays: birthdaysCopy
    });
    console.log(this.state.birthdays);
  };

  deleteBirthday = id => {
    const birthdaysNotDel = this.state.birthdays.filter(birthday => {
      return birthday.id !== id;
    });
    this.setState({
      birthdays: birthdaysNotDel
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
        <AddPerson addBirthdayFunc={this.addBirthday} />
        <h1>
          <span className="h1Letter">Birthday App</span>
          <span>
            <u></u>
          </span>
        </h1>{" "}
        <br></br>
        {/* <Calendar className="calenderStyle calendar-container" /> */}
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
