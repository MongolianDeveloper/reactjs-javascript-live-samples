import withOnline, { OnlineFriendsProps } from "./withOnline";

export const FriendStatus: React.FC<OnlineFriendsProps> = ({
  onlineFriends,
  allFriends,
}) => {
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

export default withOnline(FriendStatus);
