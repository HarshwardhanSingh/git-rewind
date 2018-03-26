import React, { Component } from 'react';
import { Diff2Html } from 'diff2html';
import axios from 'axios';

import '../../styles/main.scss';
import 'diff2html/dist/diff2html.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diff: null,
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();

    axios.get('https://api.github.com/repos/HarshwardhanSingh/webpack-bundle-size-check-plugin/commits/bcf3fd7a13e8b7856c9d00c03562af8755d36e5a', {
      headers: { Accept: 'application/vnd.github.v3.diff' }
    })
      .then((response) => {
        this.setState({
          diff: Diff2Html.getPrettyHtml(response.data),
        })
      })

    console.log('Form submitted')
  }

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
        <div dangerouslySetInnerHTML={{ __html: this.state.diff }} />
      </div>
    );
  }
}

export default App;