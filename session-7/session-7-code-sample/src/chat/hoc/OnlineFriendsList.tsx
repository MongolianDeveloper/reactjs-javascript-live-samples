import withOnline, { OnlineFriendsProps } from "./withOnline";

export const OnlineFriendsList = (props: OnlineFriendsProps) => {
  return (
    <>
      <h3>Online friends list</h3>
      <ul style={{ textAlign: "left" }}>
        {props.onlineFriends.map((friend) => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </>
  );
};

export default withOnline(OnlineFriendsList);
