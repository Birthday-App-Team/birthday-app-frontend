import React from "react";
import "./CalendarOld.css";
import AddPerson from "./AddPerson.js";
import BirthdayList from "./BirthdayList";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";

class Calendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: null,
    selectedMonth: null,
    selectedYear: null,
    showYearNav: false
  };

  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width; // add this
  }

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  };
  month = () => {
    console.log(this.state.dateContext.format("MMMM"));
    return this.state.dateContext.format("MMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  };
  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  firstDayOfMonth = () => {
    console.log(this.state.dateContext);
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  setMonth = month => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  };

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext,
      selectedMonth: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  };

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext,
      selectedMonth: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
    console.log("prevMonth dateContext = " + dateContext);
  };

  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  };

  selectList = props => {
    let popup = props.data.map(data => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={e => {
              this.onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });

    return <div className="month-popup">{popup}</div>;
  };

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    });
  };

  monthNav = () => {
    return (
      <span
        className="label-month"
        onClick={e => {
          this.onChangeMonth(e, this.month());
        }}
      >
        {this.month()}
        {this.state.showMonthPopup ? (
          <this.selectList data={this.months} />
        ) : (
          console.log("showMonthPopup false")
        )}
      </span>
    );
  };

  showYearEditor = () => {
    this.setState({
      showYearNav: true
    });
  };

  setYear = year => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    });
    console.log("setYear dateContext = " + dateContext);
  };

  onYearChange = e => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    this.setState({
      selectedYear: e.target.value
    });
  };

  onKeyUpYear = e => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false
      });
    }
  };

  yearNav = () => {
    return this.state.showYearNav ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={yearInput => {
          this.yearInput = yearInput;
        }}
        onKeyUp={e => this.onKeyUpYear(e)}
        onChange={e => this.onYearChange(e)}
        type="number"
        placeholder="year"
      />
    ) : (
      <span
        className="label-year"
        onDoubleClick={e => {
          this.showYearEditor();
        }}
      >
        {this.year()}
      </span>
    );
  };

  onDayClick = (e, day) => {
    const monthSelected = this.state.selectedMonth;
    const yearSelected = this.state.selectedYear;
    console.log("month = " + this.state.monthSelected);
    this.setState(
      {
        selectedDay: day
      },
      () => {
        console.log(
          "selected day = ",
          this.state.selectedDay,
          monthSelected,
          yearSelected
        );
      }
    );
    this.props.onDayClick &&
      this.props.onDayClick(e, day, monthSelected, yearSelected);
    console.log(day);
  };

  render() {
    let weekdays = this.weekdaysShort.map(day => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80} className="emptySlot">
          {""}
        </td>
      );
    }

    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let classDay = d === this.currentDay() ? "day current-day" : "day";
      daysInMonth.push(
        <td key={d} className={classDay}>
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }

    console.log("days", daysInMonth);

    let totalSpaces = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSpaces.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSpaces.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElements = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });

    return (
      <div className="row blacktext">
        <h1>Calender</h1>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.monthNav />
                {""}
                <this.yearNav />
              </td>
              <td colSpan="2">
                <i
                  className="fa fa-chevron-left"
                  onClick={e => this.prevMonth()}
                ></i>
                <i
                  className="fa fa-chevron-right"
                  onClick={e => this.nextMonth()}
                ></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElements}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
