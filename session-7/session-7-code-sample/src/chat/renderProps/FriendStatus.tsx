import React from "react";
import { FriendType } from "./index";

export type FriendStatusProps = {
  allFriends: FriendType[];
  onlineFriends: FriendType[];
};

export const FriendStatus: React.FC<FriendStatusProps> = ({
  allFriends,
  onlineFriends,
}) => {
  return (
    <>
      <h2>Friend Status</h2>
      <div>
        {allFriends.map((friend) => {
          return (
            <li key={friend.id}>
              <>
                <span>{friend.name + " "}</span>
                {onlineFriends.find((item) => item.id === friend.id) ? (
                  <span style={{ marginLeft: "10px", color: "white" }}>
                    Online
                  </span>
                ) : (
                  <span style={{ marginLeft: "10px", color: "red" }}>
                    Offline
                  </span>
                )}
              </>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default FriendStatus;
