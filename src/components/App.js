import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    gifts: []
  };

  onButtonClick = () => {
    const { gifts } = this.state;

    const ids = gifts.map(gift => gift.id);

    const maxID = gifts.length > 0 ? Math.max(...ids) : 0;

    gifts.push({ id: maxID + 1 });

    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Dude</h2>
        <Button className="btn-add" onClick={this.onButtonClick}>
          Click me
        </Button>
        <div id="gift-count">1</div>
      </div>
    );
  }
}

export default App;
