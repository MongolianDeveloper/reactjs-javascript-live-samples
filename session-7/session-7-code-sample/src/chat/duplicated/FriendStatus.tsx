import { useEffect, useState } from "react";
import { FriendType } from "./index";

export type FriendStatusProps = {
  allFriends: FriendType[];
};

export const FriendStatus: React.FC<FriendStatusProps> = ({ allFriends }) => {
  const [onlineFriends, setOnlineFriends] = useState<FriendType[]>([]);

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
  });

  return (
    <>
      <h3>All friends</h3>
      <ul style={{ textAlign: "left" }}>
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
      </ul>
    </>
  );
};

export default FriendStatus;
