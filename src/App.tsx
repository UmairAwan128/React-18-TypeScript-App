import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokyo", "London"];

  //Handling Select Item Event - Convention Name of event is Like start with word "handle" followed by Event "SelectItem"
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
