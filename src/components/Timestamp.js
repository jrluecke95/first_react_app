import React from 'react';

class Timestamp extends React.Component {
  render() {
    return (
      <h3>It is currently {Date()} </h3>
    )
  }
}

export default Timestamp