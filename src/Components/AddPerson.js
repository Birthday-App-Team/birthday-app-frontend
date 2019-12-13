import React from "react";
import "../App.css";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: "",
    DOB: "",
    InterestNote: ""
  };

  updateNoteText = event => {
    this.setState({
      newTaskText: event.target.value
    });
  };

  handleDateChange = e => {
    this.setState({
      DOB: e.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control navbar addTaskTextArea"
            aria-describedby="text"
            placeholder="Add notes here"
            value={this.state.InterestNote}
            onChange={this.updateNoteText}
          ></input>
        </div>
        <div className="col-2">
          <div className="form-group mx-sm-3 mb-2">
            <input
              className="form-control navbar"
              type="date"
              onChange={this.handleDateChange}
              value={this.state.DOB}
            ></input>
          </div>
        </div>

        <div className="col-1">
          <button
            id="addButton"
            className="btn btn-warning btn btn-md "
            onClick={this.handleClick}
          >
            <i className="fa fa-plus"> </i>
          </button>
        </div>
      </div>
    );
  }
}
export default AddPerson;
