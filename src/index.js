import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h2>Hi{this.props.greetings}!</h2>
  }
}

const myelement = <Hello greetings=" werld" />;

ReactDOM.render(myelement, document.getElementById('root'));
