import React from "react";
import FriendStatus from "./FriendStatus";
import OnlineFriendsList from "./OnlineFriendsList";

export type FriendType = {
  id: number;
  name: string;
};

export type ChatProps = {};
export const Chat: React.FC<ChatProps> = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <FriendStatus />
      </div>
      <div style={{ flexGrow: 1 }}>
        <OnlineFriendsList />
      </div>
    </div>
  );
};

export default Chat;
