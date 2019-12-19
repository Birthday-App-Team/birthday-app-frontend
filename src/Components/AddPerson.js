import React from "react";
import "../App.css";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: " ",
    dateSelected: " ",
    noteText: " ",
    showModal: false,
    birthday: " "
  };

  addPerson = () => {
    let birthday = {
      id: this.id + 1,
      birthdays: this.state.birthdays,
      completed: false
    }
    this.props.newbirthdays(birthday);
    this.setState({ birthdays: "" });
  }
  birthdaysChanged = (event) => {
    let birthdays = this.state.birthdays;
    birthdays = event.target.value;
    this.setState({ birthdays });

  }

  updateNoteText = event => {
    this.setState({
      newTaskText: event.target.value
    });
    console.log("hello");
  };

  handleClick = () => {
    console.log("hi");
    if (this.state.showModal === false) {
      this.setState({
        showModal: true
      });
      console.log(this.state.showModal);
    }
  };

  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  handleDateChange = e => {
    this.setState({
      DOB: e.target.value
    });
  };

  render() {
    return (
      <div className="col-2">
        <div
          className={this.state.showModal ? "modal isVisible" : "modal"}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title blacktext">
                <input
                  className="form-control navbar"
                  type="text"
                  id="addPerson"
                  placeholder="Insert Name"
                  value={this.state.addPerson}
                  onChange={this.addPersonUpdated}
                />
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleModalDismiss}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <hr/>
              <div className="modal-body lessMargin"></div>
              <input
              className= "form-control navbar"
                type="text"
                
                className="form-control navbarfoo "
                type="text"
                  id="addPerson"
                  placeholder="Insert Name"
                  value={this.state.addPerson}
                  onChange={this.addPersonUpdated}
                aria-describedby="text"
                placeholder="Insert interests here!"
                value={this.state.noteText}
                onChange={this.updateNoteText}
              ></input>
                <br></br>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  className="form-control"
                  type="date"
                  onChange={this.handleDateChange}
                  value={this.state.dateSelected}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.handleModalDismiss}
              >
                Done
              </button>
            </div>
          </div>
        </div>
        <div className="col-1">
        <button type="button" className="btn btn-success btn-md" onClick={this.handleClick}> <i className="fa fa-plus"> </i>
          </button>
        </div>
      </div>
    );
  }
}
export default AddPerson;
