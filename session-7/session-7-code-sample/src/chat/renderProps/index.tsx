import React from "react";
import FriendStatus from "./FriendStatus";
import OnlineFriendsList from "./OnlineFriendsList";
import OnlineFriends from "./OnlineFriends";

export type FriendType = {
  id: number;
  name: string;
};

export type ChatProps = {};
export const Chat: React.FC<ChatProps> = () => {
  return (
    <OnlineFriends>
      {(onlineFriends, allFriends) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              <FriendStatus
                allFriends={allFriends}
                onlineFriends={onlineFriends}
              />
            </div>
            <div style={{ flexGrow: 1 }}>
              <OnlineFriendsList onlineFriends={onlineFriends} />
            </div>
          </div>
        );
      }}
    </OnlineFriends>
  );
};

export default Chat;
