import React, { Component } from 'react';
              //Component = React.Component;

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value = { this.state.term }
          onChange={e => this.setState({ term : e.target.value })}
        />
      </div>
    )
  }

  // onInputChange(e) {
  //   console.log(e);
  // }
}

export default SearchBar;
