import React, { useEffect, useState } from "react";
import { FriendType } from "./index";

export type FriendStatusProps = {
  allFriends: FriendType[];
};

export const FriendStatus: React.FC<FriendStatusProps> = ({ allFriends }) => {
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
