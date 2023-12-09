import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Like />
    </div>
  );

  //  2, Played with Alert
  // return (
  //   <div>
  //     <Alert>Hello World</Alert>
  //   </div>
  // );

  // 1, Played with List Group

  // let items = ["New York", "San Fransico", "Tokyo", "London"];

  // //Handling Select Item Event - Convention Name of event is Like start with word "handle" followed by Event "SelectItem"
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading={"Cities"}
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
}

export default App;
