import React, { Component } from "react";


interface State {
  //
  num: number;
}

class Welcome extends Component<{}, State>{
  //
  state: State = {
    num: 0,
  }

  onPlus() {
    this.setState({
      num: ++this.state.num,
    })
  }

  onMinus() {
    this.setState({
      num: this.state.num > 0 ? --this.state.num : this.state.num,
    })
  }

  render() {
    const { num } = this.state;

    return (
      <div>
        Welcome to GNY!
        <div>State Test</div>
        <button style={{ backgroundColor: "blue" }} onClick={this.onPlus.bind(this)}>+</button>
        {num}
        <button style={{ backgroundColor: "red" }} onClick={this.onMinus.bind(this)}>-</button>
      </div>
    );
  }
}

export default Welcome;
