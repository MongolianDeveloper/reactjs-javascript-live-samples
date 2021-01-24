import React from "react";
import FriendStatus from "./FriendStatus";
import OnlineFriendsList from "./OnlineFriendsList";
import useStatus from "./useStatus";

export type FriendType = {
  id: number;
  name: string;
};

export type ChatProps = {};
export const Chat: React.FC<ChatProps> = () => {
  const { allFriends, onlineFriends } = useStatus();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <FriendStatus allFriends={allFriends} onlineFriends={onlineFriends} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <OnlineFriendsList onlineFriends={onlineFriends} />
      </div>
    </div>
  );
};

export default Chat;
