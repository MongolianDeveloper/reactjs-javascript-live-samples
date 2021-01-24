import React, { useEffect, useState } from "react";
import { FriendType } from "./index";

export type OnlineFriendsListProps = {
  allFriends: FriendType[];
};

export const OnlineFriendsList: React.FC<OnlineFriendsListProps> = ({
  allFriends,
}) => {
  const [onlineFriends, setOnlineFriends] = useState<FriendType[]>([]);

  useEffect(() => {
    // component logic
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
  });

  return (
    <>
      <h2>Online Friends List</h2>
      <div>
        <ul style={{ textAlign: "left" }}>
          {onlineFriends.map((friend) => {
            return <li key={friend.id}>{friend.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default OnlineFriendsList;
