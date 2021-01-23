import React from "react";
import OnlineFriends from "./OnlineFriends";
import FriendStatus from "./FriendStatus";
import OnlineFriendsList from "./OnlineFriendsList";

export type FriendType = {
  id: number;
  name: string;
};

export const Chat: React.FC = () => {
  return (
    <OnlineFriends>
      {(onlineFriends, allFriends) => (
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <FriendStatus
              onlineFriends={onlineFriends}
              allFriends={allFriends}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <OnlineFriendsList friends={onlineFriends} />
          </div>
        </div>
      )}
    </OnlineFriends>
  );
};

export default Chat;
