import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>You have clicked the button {this.state.count} times.</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;

