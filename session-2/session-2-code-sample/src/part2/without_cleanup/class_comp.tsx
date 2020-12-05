import React from "react";

// 2. useEffect болон Lifecycle функцууд **(useEffect vs Lifecycle methods)**
// - Clean up функц шаардлагагүй react компонент **(useEffect without cleanup)**

type MyState = {
  count: number;
};

class Part2 extends React.Component<{}, MyState> {
  state: MyState = {
    count: 0,
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Part2;
