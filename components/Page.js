import React, { Component } from 'react';
import Nav from './Nav';

class Page extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Nav />
        {children}
      </div>
    );
  }
}

export default Page;
