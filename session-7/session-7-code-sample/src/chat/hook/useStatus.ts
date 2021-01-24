import { useEffect, useState } from "react";

export type FriendType = {
  id: number;
  name: string;
};

export const useStatus = () => {
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

  return { onlineFriends, allFriends };
};

export default useStatus;
