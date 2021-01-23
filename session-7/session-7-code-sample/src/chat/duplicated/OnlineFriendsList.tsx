import { useEffect, useState } from "react";
import { FriendType } from "./index";

export type OnlineFriendsListProps = {
  allFriends: FriendType[];
};

export const OnlineFriendsList: React.FC<OnlineFriendsListProps> = ({
  allFriends,
}) => {
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
      <h3>Online friends list</h3>
      <ul style={{ textAlign: "left" }}>
        {onlineFriends.map((friend) => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </>
  );
};

export default OnlineFriendsList;
