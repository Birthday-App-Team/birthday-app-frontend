import React from "react";
import "../App.js";

class Search extends React.Component {
  state = {
    showDropdown: false
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
  updateSearch = e => {
    this.props.startSearchFunc(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <button
            className="btn info-dropdown"
            onClick={this.handleClickDropdown}
          >
            <i className="fa fa-search" />
          </button>
        </div>
        <div
          className="row"
          style={{ display: this.state.showDropdown ? "inline" : "none" }}
        >
          <div className="col-10">
            <textarea
              type="text"
              id="form8"
              className="col - 6 form-control search"
              rows="1"
              placeholder="Search"
              value={this.props.search}
              onChange={this.updateSearch}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
