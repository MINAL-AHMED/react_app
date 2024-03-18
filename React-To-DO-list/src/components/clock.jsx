// import React, { Component } from "react";
class Clock extends Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handelClick = () => {
    this.setState({
      locale: "en-US",
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {date.toLocaleTimeString(locale)}.</h2>
          <button onClick={this.handelClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default Clock;
