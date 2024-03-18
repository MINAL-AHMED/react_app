import React from "react";

export default class From extends React.Component {
  state = {
    title: "javaScript",
    text: "javaScript is awesome",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing Here");
    }
  };

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter the text"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange} />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            value={isAwesome}
            onChange={this.handleChange}
            checked={isAwesome}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
