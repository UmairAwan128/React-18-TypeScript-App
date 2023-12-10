import produce from "immer";
import React from "react";
import { useState } from "react";

const StateSupportedTypes = () => {
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

  //Array of Objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

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
    //update specific index, so traverse array and see if its happy update to happiness return happiness else return as it is.
    setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));

    //Similarly Update Array of object specific bug to fixed, so traverser array, find specific bug by id and
    //now create new object with fixed to true and rest as it is with spread operator,
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    //as the application and state grows, it become complex to update, so we have a library that can help us called "npm i immer".
    //To do the same thing or marking the first bug fixed using immer its much readable code.
    //so we call a function produce and by convention we name the parmeter of the function as "draft". then we write a logic like updating a regular JS object.
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  //6. State Object with multiple props
  return (
    <div>
      <h1>{drink.price}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default StateSupportedTypes;
