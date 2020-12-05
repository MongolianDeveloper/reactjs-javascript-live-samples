import React, { useEffect, useState } from "react";

// 2. useEffect болон Lifecycle функцууд **(useEffect vs Lifecycle methods)**
// - Clean up функц шаардлагатай react компонент **(useEffect without cleanup)**

export const Part2: React.FC = () => {
  const [isOnline, setIsOnline] = useState(null);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  if (isOnline === null) {
    return <div>{"Loading..."}</div>;
  }
  return <div>{isOnline ? "Online" : "Offline"}</div>;
};

export default Part2;
