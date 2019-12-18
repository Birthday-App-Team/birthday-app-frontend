import React from "react";
import "../App.css";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: "",
    dateSelected: "",
    noteText: "",
    showModal: false
  };

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
                <h5 className="modal-title blacktext">Add Person </h5>
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
              <div className="modal-body lessMargin"></div>
              <input
                type="text"
                className="form-control addTaskTextArea"
                aria-describedby="text"
                placeholder="Insert interests here!"
                value={this.state.noteText}
                onChange={this.updateNoteText}
              ></input>

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
          <button
            id="addButton"
            className="btn btn-info btn btn-md "
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
