import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import button from "react-bootstrap/Button";
import "../App.js";

class BirthdayList extends React.Component {
  state = {
    newBirthdayNote: "",
    showDropdown: false,
    showModal: false
  };

  editBirthday = birthday => {
    console.log("Hi");
    const newBirthdays = prompt("Update birthday", this.props.text);
    this.props.editBirthdayFunc(this.props.id, newBirthdays);
    console.log("id is" + this.props.id);
    console.log(newBirthdays);
    return newBirthdays;
  };

  handleDelete = e => {
    this.props.deleteTaskFunc(this.props.id);
  };

  handleClickDropdown = () => {
    console.log(this.state.showDropdown);
    if (this.state.showDropdown === false) {
      this.setState({
        showDropdown: true
      });
    } else {
      this.setState({
        showDropdown: false
      });
    }
  };

  updateNoteText = event => {
    this.setState({
      newBirthdayNote: event.target.value
    });
    console.log("hello");
  };

  handleClickEdit = () => {
    console.log("hi");
    if (this.state.showModal === false) {
      this.setState({
        showModal: true
      });
      console.log(this.state.showModal);
    }
  };

  handleClickDelete = () => {
    this.props.deleteBirthdayFunc(this.props.id);
  };

  handleModalDismiss = () => {
    this.props.editBirthdayFunc(this.props.id, this.state.newBirthdayNote);

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
      <div>
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
                  {" "}
                  Edit {this.props.name}'s info
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
                    {this.props.text}
                  </label>
                  <textarea
                    type="text"
                    id="form8"
                    className="md-textarea form-control"
                    rows="4"
                    placeholder={this.props.text}
                    value={this.state.noteText}
                    onChange={this.updateNoteText}
                  ></textarea>
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
          </div>
        </div>

        <div className="row">
          <div className="col-4">{this.props.name}</div>
          <div className="col-2">
            {moment().diff(this.props.dateOfBirth, "years")}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-link">
              {" "}
              <a
                href={
                  moment().diff(this.props.dateOfBirth, "years") > 12
                    ? "https://www.amazon.com/s?k=gift&ref=nb_sb_noss_2"
                    : "https://www.amazon.com/gcx/Gifts-for-Kids-4-7/gfhz/?canBeGiftWrapped=false&categoryId=kid4-neutral&isPrime=false&starRatingFrom=0"
                }
                target="blank"
              >
                <i className="fa fa-gift"></i>
              </a>
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClickEdit}
            >
              <i className="fa fa-edit"> </i>
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClickDelete}
            >
              <i className="fa fa-trash"> </i>
            </button>
          </div>
          <div className="col-2">
            <p>
              {" "}
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handleClickDropdown}
              >
                <i className="fa fa-caret-down"></i>{" "}
              </button>
            </p>
          </div>
          <div className="row">
            <div
              className="collapse"
              id="collapseExample"
              style={{ display: this.state.showDropdown ? "inline" : "none" }}
            >
              <div className="card card-body blacktext">{this.props.text}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayList;
