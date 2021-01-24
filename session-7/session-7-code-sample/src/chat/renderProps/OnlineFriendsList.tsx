import React from "react";
import { FriendType } from "./index";

export type OnlineFriendsListProps = {
  onlineFriends: FriendType[];
};

export const OnlineFriendsList: React.FC<OnlineFriendsListProps> = ({
  onlineFriends,
}) => {
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
