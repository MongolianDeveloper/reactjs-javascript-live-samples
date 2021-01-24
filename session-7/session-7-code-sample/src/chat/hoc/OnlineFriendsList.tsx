import React from "react";
import { FriendType } from "./index";
import withOnline from "./withOnline";

export type OnlineFriendsListProps = {
  onlineFriends: FriendType[];
  allFriends: FriendType[];
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

export default withOnline(OnlineFriendsList);
