import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ImPureComponent from "./components/ImPureComponent";

function App() {
  //6. Ways to configure a state.
  //Prefer creating seperate state variables
  const [isLoading, setLoading] = useState(false);
  //if two or more are related instead of creating seperatly we can manage them in single, don't create nested properties because, it will be difficult to manage.
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    address: {
      city: "Lahore",
      zipCode: 54000,
    },
  });
  //objects and nested objects
  const [drink, setDrink] = useState({
    title: "Rooh Afza",
    price: 5,
  });

  //Array
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // To update a state object, provide react a new object not the old one with updated value.
    const newDrink = {
      ...drink, //creates all the properties, we don't have to create all of them with old values
      price: drink.price + 1, //only create the prop with updated value
    };
    // or move this new drink object directly inside the setDrink to make code short.
    setDrink(newDrink);

    //to update nested object, create a new nested object we well, just spread operator is not enough, and also
    //objects are reference type so using spread opertor exisiting object ref is assigned but you know to update state we need to provide a new object.
    setPerson({
      ...person,
      address: {
        ...person.address,
        zipCode: 5422,
      },
    });

    //similarly to update array.
    //add a new element
    setTags([...tags, "exciting"]);
    //remove an element
    setTags(tags.filter((tag) => tag !== "happy"));
    //update specific index happy to happiness
    setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));
  };

  //6. State Object with multiple props
  return (
    <div>
      <h1>{drink.price}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );

  // //5. The following is not a pure functional component, avoid creating such components.
  // return (
  //   <>
  //     <ImPureComponent />
  //     <ImPureComponent />
  //     <ImPureComponent />
  //   </>
  // );

  // 3. Alert and Like Component
  // const [alertVisible, setAlertVisibility] = useState(false);

  // return (
  //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
  //     )}
  //     <Button color="primary" onClick={() => setAlertVisibility(true)}>
  //       My Button
  //     </Button>
  //     <Like />
  //   </div>
  // );

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
