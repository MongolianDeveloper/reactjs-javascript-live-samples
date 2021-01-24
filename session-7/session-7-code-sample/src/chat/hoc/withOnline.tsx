import React, { useEffect, useState } from "react";

export type FriendType = {
  id: number;
  name: string;
};

export type OnlineFriendsProps = {
  onlineFriends: FriendType[];
  allFriends: FriendType[];
};

export type WithOnlineProps = {};

export function WithOnline<P>(
  WrappedComponent: React.ComponentType<P & OnlineFriendsProps>
) {
  const HocWithOnline = (props: P) => {
    const [onlineFriends, setOnlineFriends] = useState<FriendType[]>([]);
    const [allFriends] = useState<FriendType[]>([
      {
        id: 1,
        name: "James",
      },
      {
        id: 2,
        name: "David",
      },
      {
        id: 3,
        name: "Sarah",
      },
    ]);

    useEffect(() => {
      function handleStatusChange() {
        const filteredFriends = allFriends.filter(
          (friend) => friend.id % 2 === 0
        );
        setOnlineFriends(filteredFriends);
      }
      handleStatusChange();
      return () => {
        setOnlineFriends([]);
      };
    }, []);

    return (
      <WrappedComponent
        {...props}
        onlineFriends={onlineFriends}
        allFriends={allFriends}
      />
    );
  };

  return HocWithOnline;
}

export default WithOnline;
