import React from "react";
import "../App.js";

class Search extends React.Component {
  updateSearch = e => {
    this.props.startSearchFunc(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <textarea
          type="text"
          id="form8"
          className="col - 6 form-control birthday-today searchBackground"
          rows="1"
          placeholder="Search"
          value={this.props.search}
          onChange={this.updateSearch}
        ></textarea>
      </div>
    );
  }
}
export default Search;
