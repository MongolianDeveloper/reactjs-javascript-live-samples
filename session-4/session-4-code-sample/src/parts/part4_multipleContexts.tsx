import React, { createContext } from "react";

// 4. Контекст ашигласан жишээ **(Context examples)**
//    - Олон контекст ашиглах **(Consuming multiple contexts)**
//    - Шаардлагагүй рендэр хийгдэхээс сэргийлэх **(Avoid unintentional renders)**

const ThemeContext = createContext("light");

const UserContext = createContext({
  name: "Guest",
});

// export default class Part4 extends React.Component {
//   render() {
//     const { signedInUser, theme } = this.props;

//     return (
//       <ThemeContext.Provider value={theme}>
//         <UserContext.Provider value={signedInUser}>
//           <Layout />
//         </UserContext.Provider>
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Layout() {
//   return (
//     <div>
//       <Sidebar />
//       <Content />
//     </div>
//   );
// }

// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {(theme) => (
//         <UserContext.Consumer>
//           {(user) => <ProfilePage user={user} theme={theme} />}
//         </UserContext.Consumer>
//       )}
//     </ThemeContext.Consumer>
//   );
// }
