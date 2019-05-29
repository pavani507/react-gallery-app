import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };
  //include a search field feature and a search route to search for new categories of images.
  handleSubmit = e => {
    e.preventDefault();

    let search = this.query.value;
    let path = `/search/${search}`;
    this.props.history.push(path);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={input => (this.query = input)}
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>
    );
  }
}
export default withRouter(Search);
