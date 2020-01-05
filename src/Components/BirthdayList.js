import React from 'react';
import moment from "moment";
import "../App.js";

class BirthdayList extends React.Component {

  state = {
    updatedName: "",
    updatedDOB: this.props.dateOfBirth.slice(0, 10),
    updatedInterests: "",
    showDropdown: false,
    showModal: false
  };

  formatDateDisplay = props => {
    if (this.props.isBirthdayToday) {
      return (
        <div>
          <h2 className="birthday-today">turns {props.nextAge} today!</h2>
          <h3>{moment(props.dateOfBirth).format("MMM Do")}</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{this.props.nextBirthday.fromNow()}</h2>
          <h3>turns <span className="years">{props.nextAge}</span> on {moment(props.dateOfBirth).format("MMM Do")}</h3>
        </div>
      )
    }
  }

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

  // X BUTTON (DISMISS MODAL WITHOUT ANY CHANGES):
  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  // DONE BUTTON:
  handleUpdate = () => {
    let name, dob, interests;
    if (this.state.updatedName === "") {
      name = this.props.name
    } else {
      name = this.state.updatedName
    }
    if (this.state.updatedDOB === "") {
      dob = this.props.dateOfBirth
    } else {
      dob = this.state.updatedDOB
    }
    if (this.state.updatedInterests === "") {
      interests = this.props.text
    } else {
      interests = this.state.updatedInterests
    }
    this.props.editBirthdayFunc(
      this.props.id,
      name,
      dob,
      interests
    )
    this.setState({
      showModal: false
    });
  };

  // AMAZON GIFTS LINKS:
  giftByAge = () => {
    if (this.props.nextAge < 2) {
      return "https://www.amazon.co.uk/b?ie=UTF8&node=8661766031"
    } 
    else if (this.props.nextAge >= 2 && this.props.nextAge <= 3 ) {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Toddlers/gfhz/?categoryId=toddler-neutral"
    } 
    else if (this.props.nextAge >= 4 && this.props.nextAge <= 7 ) {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Kids-4-7/gfhz/?categoryId=kid4-neutral"
    } 
    else if (this.props.nextAge >= 8 && this.props.nextAge <= 12 ) {
      return "https://www.amazon.com/gcx/Gifts-for-Kids-8-12/gfhz/?categoryId=kid8-neutral"
    }
    else if (this.props.nextAge >= 13 && this.props.nextAge <= 17 ) {
      return "https://www.amazon.com/gcx/Gifts-for-Teens/gfhz/?categoryId=teen-neutral"
    } 
    else {
      return "https://www.amazon.co.uk/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral"
    }
  }

  render() {
    return (

      <div className="container">
        <div className="row">

          {/* this is the EDIT modal */}
          <div
            className={
              this.state.showModal ? "modal isVisible" : "modal "
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
                    <span aria-hidden="true" className="makeItPink">&times;</span>
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
                      placeholder={this.props.name}
                      onChange={this.updateName}
                    ></textarea>
                  </div>
                  <br></br>
                  <label data-error="wrong" data-success="right" htmlFor="form8">
                    Edit birthday:
                </label>
                  <div className="form-group mx-sm-3 mb-2">
                    {/* EDIT DATE */}
                    <input
                      className="form-control"
                      type="date"
                      value={this.state.updatedDOB}
                      onChange={this.updateBirthday}
                    ></input>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    ></label>
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
                      placeholder={this.props.text}
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
          <div className="col-5">
            <button className="btn info-dropdown"
              onClick={this.handleClickDropdown}
            >
              <i className="fa fa-caret-down" />
            </button>
            <h1>{this.props.name}</h1>
          </div>
          <div className="col-4">
            {this.formatDateDisplay(this.props)}
          </div>
          <div className="col-2">
            <button className="btn edit"
              onClick={this.handleClickEdit}
            >EDIT</button>
          </div>
          <div className="col-1">
            <button className="btn delete"
              onClick={this.handleClickDelete}
            >
              <i className="fa fa-trash" />
            </button>
          </div>

          {/* this is the BIRTHDAY dropdown */}
          <div className="container">
            <div className="row">
              <div
                className="col-12"
                style={{ display: this.state.showDropdown ? "inline" : "none" }}
              >
                <span className="card interests">INTERESTS: {this.props.text}</span>

                <button type="button" className="btn gift ml-2">
                  <a href={this.giftByAge()} target="blank">
                    <i className="fa fa-gift"></i>
                  </a>
                </button>

                <button type="button" className="btn envelope mx-2">
                  <i className="fa fa-envelope"></i>
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
    )
  }

}

export default BirthdayList;