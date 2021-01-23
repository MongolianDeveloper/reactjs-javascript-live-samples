import { useEffect, useState } from "react";
import { FriendType } from "./index";

export type OnlineFriendsProps = {
  children: (
    onlineFriends: FriendType[],
    allFriends: FriendType[]
  ) => JSX.Element;
};

export const OnlineFriends: React.FC<OnlineFriendsProps> = ({ children }) => {
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
  });

  return children(onlineFriends, allFriends);
};

export default OnlineFriends;
