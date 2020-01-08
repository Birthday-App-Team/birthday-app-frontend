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
        <div className="col-2 col-md-1">
          <button
            id="searchButton"
            className="btn search-button"
            onClick={this.handleClickDropdown}
          >
            <i className="fa fa-search" />
          </button>
        </div>
        <div
          className="col-10 col-md-5"
          style={{ display: this.state.showDropdown ? "inline" : "none" }}
        >
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
    );
  }
}
export default Search;
