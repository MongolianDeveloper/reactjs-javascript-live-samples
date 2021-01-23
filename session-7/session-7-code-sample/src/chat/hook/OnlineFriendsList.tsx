import useStatus from "./useStatus";

export type OnlineFriendsListProps = {};

export const OnlineFriendsList: React.FC<OnlineFriendsListProps> = () => {
  const { onlineFriends } = useStatus();

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
