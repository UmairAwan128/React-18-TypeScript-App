//The following component is impure because it is using and changing a variable that is outside of its boundry
import React from "react";

let count = 0;

//Like pure pure functions components should also be pure give same props it should return same result every time,
//This is good for performance of your app, react skips re-rendering or store result somewhere and reuse that, other places if needed.
const ImPureComponent = () => {
  console.log("Message Called ", count);
  count++;
  return <div>Message {count}</div>;
  //return <div>Message</div>;
};
// The strange thing is this component is rendering "Message 2" not "Message 1", This is becuase of <React.StrictMode> in main.tsx.
// Strict Mode :
// When enabled, any impure function or component is rendered twice and the second render is displayed to user, that is
// its not an expected output, this is an indication for user that this component is impure, make it pure, and this also slows down our app even more.
// By default Strict Mode is on dev env after React 18, it is disabled on Prod env

//To Make this component Pure, either move the count variable inside functional component, or don't use that anything that exist outside of the component.
export default ImPureComponent;
