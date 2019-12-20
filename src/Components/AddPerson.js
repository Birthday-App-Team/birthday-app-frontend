import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";

class AddPerson extends React.Component {
  //initial state
  state = {
    name: "",
    dateSelected: "",
    note: "",
    gender: "f",
    showModal: false,
    birthday: ""
  };

  handleClickAdd = () => {
    this.props.addBirthdayFunc(
      this.state.name,
      this.state.birthday,
      this.state.note,
      this.state.gender
    );
    console.log("hi add", this.state.name);

    this.setState({
      showModal: false
    });
  };

  updateNoteText = event => {
    this.setState({
      note: event.target.value
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

  handleBirthday = e => {
    this.setState({
      birthday: e.target.value
    });
  };

  handleNewName = e => {
    this.setState({
      name: e.target.value
    });
    console.log("WOOP", this.state.name);
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <button
            id="addButton"
            className="btn btn-info btn btn-md "
            onClick={this.handleClick}
          >
            <i className="fa fa-plus"> </i>
          </button>
        </div>

        <div className="row">
          <div
            className={
              this.state.showModal ? "modal  isVisible blacktext" : "modal "
            }
            id="modalEditForm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title w-100 font-weight-bold">
                    Add Birthday
                  </h4>
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
                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      className="form-control"
                      type="date"
                      onChange={this.handleBirthday}
                    ></input>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    ></label>
                  </div>

                  <div className="md-form">
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows="2"
                      placeholder="Add notes here"
                      onChange={this.updateNoteText}
                    ></textarea>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    ></label>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button
                    className="btn btn-unique"
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
