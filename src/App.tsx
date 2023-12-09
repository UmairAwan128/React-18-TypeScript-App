import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
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
