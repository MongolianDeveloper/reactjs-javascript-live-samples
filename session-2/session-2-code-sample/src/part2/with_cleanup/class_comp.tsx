import React from "react";

// 2. useEffect болон Lifecycle функцууд **(useEffect vs Lifecycle methods)**
// - Clean up функц шаардлагатай react компонент **(useEffect without cleanup)**

class Part2 extends React.Component<{}, {}> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     isOnline: false,
  //   };
  //   this.handleStatusChange = this.handleStatusChange.bind(this);
  // }
  // componentDidMount() {
  //   ChatAPI.subscribeToFriendStatus(
  //     this.props.friend.id,
  //     this.handleStatusChange
  //   );
  // }
  // componentWillUnmount() {
  //   ChatAPI.unsubscribeFromFriendStatus(
  //     this.props.friend.id,
  //     this.handleStatusChange
  //   );
  // }
  // handleStatusChange(status: any) {
  //   this.setState({
  //     isOnline: status.isOnline,
  //   });
  // }
  // render() {
  //   if (this.state.isOnline === null) {
  //     return "Loading...";
  //   }
  //   return this.state.isOnline ? "Online" : "Offline";
  // }
  // return() {
  //   return null;
  // }
}

export default Part2;
