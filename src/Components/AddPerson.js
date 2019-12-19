import React from "react";
import "../App.css";
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
                  <i className="fas fa-pencil prefix grey-text"></i>
                  <textarea
                    type="text"
                    id="form8"
                    className="md-textarea form-control"
                    rows="4"
                    placeholder={this.props.text}
                    value={this.state.noteText}
                    onChange={this.updateNoteText}
                  ></textarea>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    {this.props.text}
                  </label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-unique"
                  onClick={this.handleModalDismiss}
                >
                  Done
                </button>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddPerson;
