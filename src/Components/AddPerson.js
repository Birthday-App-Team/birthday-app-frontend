import React from "react";
import "../App.css";
import moment from "moment";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: "",
    note: "",
    gender: "",
    showModal: false,
    birthday: "",
    number: "",
    checked: false,
    message: "",
    toggle: false,
    hideToggle: true
  };

  // shows modal
  handleClick = () => {
    this.setState({
      showModal: true
    });

    this.stateSetting();
  };

  // hides modal
  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  //add button on modal function
  handleClickAdd = () => {
    if (this.state.name !== "" && this.state.birthday === "") {
      alert("Please enter valid birthday");
    } else if (
      this.state.name === "" &&
      this.state.birthday === "" &&
      this.state.note === "" &&
      this.state.number === ""
    ) {
      this.setState({
        showModal: false
      });
    } else {
      this.props.addBirthdayFunc(
        this.state.name,
        this.state.birthday,
        this.state.note,
        this.state.number,
        this.state.checked,
        this.state.message,
        this.state.toggle
      );
    }
    this.setState({
      showModal: false
    });
    console.log("message is: " + this.state.message);
  };

  stateSetting = () => {
    this.setState({
      name: "",
      note: "",
      gender: "",
      birthday: "",
      number: "",
      checked: false,
      message: "",
      toggle: false
    });
  };

  //checkbox click on/off
  handleClickCheckbox = () => {
    if (this.state.checked === true) {
      this.setState({
        checked: false
      });
    } else {
      this.setState({
        checked: true
      });
    }
    console.log(this.state.checked);
  };

  //note input
  updateNoteText = e => {
    this.setState({
      note: e.target.value
    });
  };

  //DOB input
  handleBirthday = e => {
    this.setState({
      birthday: e.target.value
    });
    let timeNow = moment().format("HH:mm:ss");
    if (
      timeNow > "10:00:00" &&
      moment(e).format("MM-DD") === moment().format("MM-DD")
    ) {
      this.setState({
        hideToggle: false
      });
      console.log("hi, hiding toggle " + this.state.hideToggle);
    } else {
      this.setState({
        hideToggle: true
      });
    }
    console.log(this.state.hideToggle);
  };

  //name input
  handleNewName = e => {
    this.setState({
      name: e.target.value
    });
  };

  //number input
  handleNewNumber = e => {
    this.setState({
      number: e.target.value
    });
  };

  // birthday message input:
  updatebirthdayMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  //toggle on/off
  handleToggleClick = () => {
    if (this.state.toggle === true) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
  };

  render() {
    return (
      <div>
        <div className="col-2">
          <button
            id="addButton"
            className="btn add-button"
            onClick={this.handleClick}
          >
            <i className="fa fa-plus"> </i>
          </button>
        </div>

        {/* ADD modal */}
        <div className="row">
          <div
            className={this.state.showModal ? "modal isVisible" : "modal"}
            id="modalEditForm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <span className="makeItPink">add a birthday...</span>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.handleModalDismiss}
                  >
                    <span aria-hidden="true" className="makeItPink">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="md-form">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    >
                      Name:
                    </label>
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows="1"
                      placeholder="Name"
                      onChange={this.handleNewName}
                    ></textarea>
                  </div>
                  <br></br>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    Birthday:
                  </label>
                  <div className="form-group mx-sm-3 mb-2 row">
                    <input
                      className="form-control col-12"
                      type="date"
                      onChange={this.handleBirthday}
                    ></input>
                  </div>
                  <div className="form-group row">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="tel-input"
                      className="col-12 col-form-label"
                      placeholder="+44"
                    >
                      Phone Number:
                    </label>
                    <br></br>
                    <div className="col-12">
                      <input
                        className="md-textarea form-control"
                        type="tel"
                        id="tel-input"
                        onChange={this.handleNewNumber}
                      ></input>
                    </div>
                  </div>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    Birthday Message:
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          onClick={this.handleClickCheckbox}
                        ></input>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with checkbox"
                      maxLength="1000"
                      onChange={this.updatebirthdayMessage}
                    ></input>
                  </div>

                  <div className="md-form">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    >
                      Interests:
                    </label>
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows="2"
                      placeholder="Add notes here"
                      onChange={this.updateNoteText}
                    ></textarea>
                  </div>
                </div>
                {this.state.hideToggle ? (
                  <div></div>
                ) : (
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitches"
                      onClick={this.ifToggleYes}
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitches"
                    >
                      Would you like a text sent today?
                    </label>
                  </div>
                )}

                <div className="modal-footer d-flex justify-content-center">
                  <button
                    className="btn btn-unique done-button"
                    onClick={this.handleClickAdd}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPerson;
