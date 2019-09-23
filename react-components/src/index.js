import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// class Greeting extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>Hello {this.props.firstName}</h1>
//         <p>Your email is: {this.props.contact.email}</p>
//         <img src="https://source.unsplash.com/random/800x600" />
//       </div>
//     );
//   }
// }

// const Greeting = props => {
//   console.log(props);

//   return (
//     <div>
//       <h1>Hello {props.firstName} !</h1>
//       <p>Your email is: {props.contact.email}</p>
//       <img src="https://source.unsplash.com/random/800x600" />
//     </div>
//   );
// };

/*
const App = () => {
  const userA = {
    email: "alfonso@ironhack.com",
    phone: 123456
  };
  const userB = {
    email: "kiran@ironhack.com",
    phone: 5678
  };

  return (
    <div>
      <Greeting firstName="Alfonso" contact={userA} />
      <Greeting firstName="Kiran" contact={userB} />
    </div>
  );
};
*/

// const element = (
//   <div>
//     <h1>Hello</h1>
//     <img src="https://source.unsplash.com/random/800x600" />
//   </div>
// );
