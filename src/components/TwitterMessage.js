import React from "react";

class TwitterMessage extends React.Component {

  state = {
    chars: ""
  }

  updateInput = (event) => {
    this.setState({
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.updateInput}
          value={this.state.chars}
          />
        <br />
        <label>{this.props.maxChars - this.state.chars.length} Remaining</label>
      </div>
    );
  }
}

export default TwitterMessage;
