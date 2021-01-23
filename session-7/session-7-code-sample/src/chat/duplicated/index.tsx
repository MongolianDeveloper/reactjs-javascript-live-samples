import React, { useState } from "react";
import FriendStatus from "./FriendStatus";
import OnlineFriendsList from "./OnlineFriendsList";

export type FriendType = {
  id: number;
  name: string;
};

export const Chat: React.FC = () => {
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

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <FriendStatus allFriends={allFriends} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <OnlineFriendsList allFriends={allFriends} />
      </div>
    </div>
  );
};

export default Chat;
