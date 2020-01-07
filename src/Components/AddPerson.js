import React from "react";
import "../App.css";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: "",
    dateSelected: "",
    note: "",
    gender: "f",
    showModal: false,
    birthday: "",
    number: ""
  };

  // shows modal
  handleClick = () => {
    this.setState({
      showModal: true
    });
  };

  // hides modal
  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  //add button on modal function
  handleClickAdd = () => {
    if (
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
        this.state.number
      );
      this.setState({
        showModal: false
      });
    }
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
                      for="example-tel-input"
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
