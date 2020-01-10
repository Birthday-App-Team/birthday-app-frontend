import React from "react";
import moment from "moment";
import "../App.js";

class BirthdayList extends React.Component {
  state = {
    updatedName: this.props.name,
    updatedDOB: this.props.dateOfBirth.slice(0, 10),
    updatedInterests: this.props.text,
    updatedNumber: this.props.number,
    showDropdown: false,
    showModal: false
  };

  formatDateDisplay = props => {
    if (this.props.isBirthdayToday) {
      return (
        <div>
          <h2 className="birthday-today">
            turns {props.nextAge} today! <i className="fa fa-birthday-cake mx-2" />
          </h2>
          <h3>{moment(props.dateOfBirth).format("MMM Do")}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.props.nextBirthday.fromNow()}</h2>
          <h3>
            turns <span className="years">{props.nextAge}</span> on{" "}
            {moment(props.dateOfBirth).format("MMM Do")}
          </h3>
        </div>
      );
    }
  };

  // DELETE BUTTON
  handleClickDelete = () => {
    this.props.deleteBirthdayFunc(this.props.id);
  };

  // DROPDOWN BUTTON
  handleClickDropdown = () => {
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

  // EDIT BUTTON (SHOWS MODAL):
  handleClickEdit = () => {
    if (this.state.showModal === false) {
      this.setState({
        showModal: true
      });
    }
  };

  // EDIT NAME:
  updateName = e => {
    this.setState({
      updatedName: e.target.value
    });
  };

  // EDIT DOB:
  updateBirthday = e => {
    this.setState({
      updatedDOB: e.target.value
    });
  };

  // EDIT INTERESTS:
  updateInterests = e => {
    this.setState({
      updatedInterests: e.target.value
    });
  };

  // EDIT NUMBER:
  updateNumber = e => {
    this.setState({
      updatedNumber: e.target.value
    });
  };

  // X BUTTON (DISMISS MODAL WITHOUT ANY CHANGES):
  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  // DONE BUTTON:
  handleUpdate = () => {
    console.log(this.state);
    if (this.state.updatedDOB === "") {
      this.setState({
        updatedDOB: "-"
      });
    } else {
      this.props.editBirthdayFunc(
        this.props.id,
        this.state.updatedName,
        this.state.updatedDOB,
        this.state.updatedInterests,
        this.state.updatedNumber
      );
    }
    this.setState({
      showModal: false
    });
  };

  // AMAZON GIFTS LINKS:
  giftByAge = () => {
    if (this.props.nextAge < 2) {
      return "https://www.amazon.co.uk/b?ie=UTF8&node=8661766031";
    } else if (this.props.nextAge >= 2 && this.props.nextAge <= 3) {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Toddlers/gfhz/?categoryId=toddler-neutral";
    } else if (this.props.nextAge >= 4 && this.props.nextAge <= 7) {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Kids-4-7/gfhz/?categoryId=kid4-neutral";
    } else if (this.props.nextAge >= 8 && this.props.nextAge <= 12) {
      return "https://www.amazon.com/gcx/Gifts-for-Kids-8-12/gfhz/?categoryId=kid8-neutral";
    } else if (this.props.nextAge >= 13 && this.props.nextAge <= 17) {
      return "https://www.amazon.com/gcx/Gifts-for-Teens/gfhz/?categoryId=teen-neutral";
    } else {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral";
    }
  };

  render() {
    return (
      <div className="">
        <div className="row">
          {/* this is the EDIT modal */}
          <div
            className={this.state.showModal ? "modal isVisible" : "modal "}
            id="modalEditForm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title makeItPink">
                    Edit {this.props.name}'s info
                  </h4>
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
                      Edit name:
                    </label>
                    {/* EDIT NAME */}
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows="1"
                      value={this.state.updatedName}
                      onChange={this.updateName}
                    ></textarea>
                  </div>
                  <br></br>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    Edit birthday:
                  </label>
                  <div className="md-form">
                    {/* EDIT DATE */}
                    <input
                      className="form-control"
                      type="date"
                      value={this.state.updatedDOB}
                      onChange={this.updateBirthday}
                    ></input>
                  </div>
                  {/* EDIT NUMBER */}

                  <div className="md-form">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    >
                      Edit Number:
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      value={this.state.updatedNumber}
                      onChange={this.updateNumber}
                    ></input>
                  </div>

                  <div className="md-form">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    >
                      Edit interests:
                    </label>
                    {/* EDIT INTERESTS */}
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows="2"
                      value={this.state.updatedInterests}
                      onChange={this.updateInterests}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  {/* DONE BUTTON */}
                  <button
                    className="btn btn-unique done-button"
                    onClick={this.handleUpdate}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* this is each BIRTHDAY */}
          <div
            className="col-4"
          >
            <button
              className="btn info-dropdown"
              onClick={this.handleClickDropdown}
            >
              <i className="fa fa-caret-down" />
            </button>
            <h1>{this.props.name}</h1>
          </div>
          <div className="col-5">{this.formatDateDisplay(this.props)}</div>

          <div className="col-12 col-md-3">
            <button className="btn edit" onClick={this.handleClickEdit}>
              {" "}
              <i className="fa fa-pencil" />{" "}
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn delete" onClick={this.handleClickDelete}>
              <i className="fa fa-trash" />
            </button>
          </div>

          {/* this is the BIRTHDAY dropdown */}
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-5"
                style={{ display: this.state.showDropdown ? "inline" : "none" }}
              >
                <span className="card interests">
                  INTERESTS: {this.props.text}
                </span>
                <span className="card interests">
                  PHONE NUMBER: {this.props.number}
                </span>
                <button type="button" className="btn gift ml-2">
                  <a href={this.giftByAge()} target="blank">
                    <i className="fa fa-gift"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <hr className="rule" />
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayList;
