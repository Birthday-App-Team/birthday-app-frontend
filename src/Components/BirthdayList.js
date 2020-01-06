import React from 'react';
import moment from "moment";
import "../App.js";

class BirthdayList extends React.Component {

  state = {
    newBirthdayNote: "",
    updatedName: "",
    updatedDOB: "",
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

  handleClickDelete = () => {
    this.props.deleteBirthdayFunc(this.props.id);
  };

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

  // FUNCTION FOR EDITING BIRTHDAYS:
  handleClickEdit = () => {
    if (this.state.showModal === false) {
      this.setState({
        showModal: true
      });
    }
  };

  // FUNCTION FOR EDITING BIRTHDAYS:
  handleBirthday = e => {
    this.setState({
      updatedDOB: e.target.value
    });
  };

  // FUNCTION FOR EDITING BIRTHDAYS:
  updateNameText = e => {
    this.setState({
      updatedName: e.target.value
    });
  };

  // FUNCTION FOR EDITING BIRTHDAYS:
  updateNoteText = e => {
    this.setState({
      newBirthdayNote: e.target.value
    });
  };

  // FUNCTION FOR EDITING BIRTHDAYS:
  handleModalDismiss = () => {
    this.props.editBirthdayFunc(
      this.props.id,
      this.state.newBirthdayNote,
      this.state.updatedName,
      this.state.updatedDOB
    );
    this.setState({
      showModal: false
    });
  };

  render() {
    return (

      <div className="container">
        <div className="row">

        {/* this is the EDIT modal */}
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
                  <textarea
                    type="text"
                    id="form8"
                    className="md-textarea form-control"
                    rows="1"
                    placeholder={this.props.name}
                    onChange={this.updateNameText}
                  ></textarea>
                </div>
                <br></br>
                <label data-error="wrong" data-success="right" htmlFor="form8">
                  Edit birthday:
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
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    Edit interests:
                  </label>
                  <textarea
                    type="text"
                    id="form8"
                    className="md-textarea form-control"
                    rows="2"
                    placeholder={this.props.text}
                    value={this.state.noteText}
                    onChange={this.updateNoteText}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-unique done-button"
                  onClick={this.handleModalDismiss}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

          {/* this is each BIRTHDAY */}
          <div className="col-5
          ">
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
            
          <div className="col-12 col-sm-2">
            <button className="btn edit"
              onClick={this.handleClickEdit}
            > <i className="fa fa-pencil-square"/> </button>
          
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
                className="col-12 col-sm-1"
                style={{ display: this.state.showDropdown ? "inline" : "none" }}
              >
                <span className="card interests">INTERESTS: {this.props.text}</span>

                <button type="button" className="btn gift ml-2">
                  <a
                    href={
                      (this.props.nextAge, "years") > 12
                        ? "https://www.amazon.com/s?k=gift&ref=nb_sb_noss_2"
                        : "https://www.amazon.com/gcx/Gifts-for-Kids-4-7/gfhz/?canBeGiftWrapped=false&categoryId=kid4-neutral&isPrime=false&starRatingFrom=0"
                    }
                    target="blank"
                  >
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