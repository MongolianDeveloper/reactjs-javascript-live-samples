import { FriendType } from "./index";

export type OnlineFriendsListProps = {
  friends: FriendType[];
};

export const OnlineFriendsList = (props: OnlineFriendsListProps) => {
  return (
    <>
      <h3>Online friends list</h3>
      <ul style={{ textAlign: "left" }}>
        {props.friends.map((friend) => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </>
  );
};

export default OnlineFriendsList;
