import React from "react";
import "../App.css";
import Item from "../part-1/Item";

// 2. State -г класс болон функц компонентуудад ашиглах
//    - State зарлах, унших, өөрчлөх

type MyState = {
  count: number;
  hide: boolean;
};

class Part2 extends React.Component<{}, MyState> {
  state: MyState = {
    count: 0,
    hide: false,
  };

  onClickItemHandler = () => {
    this.state.count === 10
      ? this.setState({ hide: true })
      : this.setState({ count: this.state.count + 1 });
  };

  onClickRestartHandler = () => {
    this.setState({ hide: false });
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>Part 2</h1>
        <div className="container">
          {!this.state.hide ? (
            <Item count={this.state.count} click={this.onClickItemHandler} />
          ) : (
            <div className="restart" onClick={this.onClickRestartHandler}>
              Show
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Part2;
