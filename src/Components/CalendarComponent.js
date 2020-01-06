import React from "react";
import Calendar from "react-calendar";

class CalendarCoponent extends React.Component {
  state = {
    birthdays: this.props.birthdays
  };

  onDayClick = e => {
    this.props.consoleLogFunc();
    // alert(this.state.birthdays);  day, m, y
    console.log("birthdays = ", this.props.birthdays);
  };

  calendarDisplay = (date, view) => {
    console.log(date, view);
    console.log(this.props.birthdays);
    const birthdaysOnDay = this.props.birthdays.filter(birthday => {
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
      <Calendar
        tileContent={this.calendarDisplay}
        onClickDay={this.onDayClick}
        // birthdaysOnDay
      />
    );
  }
}

export default CalendarCoponent;
