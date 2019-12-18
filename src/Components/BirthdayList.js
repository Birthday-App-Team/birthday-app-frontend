import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import button from "react-bootstrap/Button";

class BirthdayList extends React.Component {
  state = {
    newBirthdayNote: "",
    showDropdown: false
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

  render() {
    return (
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
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.editBirthday}
          >
            edit
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
    );
  }
}

export default BirthdayList;
