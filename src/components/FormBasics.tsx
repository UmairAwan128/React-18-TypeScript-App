import React, { FormEvent, useRef, useState } from "react";

const FormBasics = () => {
  //To get value of input fields from form. There are two ways UseRef and UseState.

  // 1. UseRef() hook is to get a referenc of any HTML Dom element on the page and hence access its any property,
  //since in typeScript we need to define type, so we tell the type with Angular baracktes also the type we
  // defined here is "HTMLInputElement" which is specifc one for Form Input elements the benifit of specific is
  // it has specifc properties of input element like value, but these probably might not exist in the more General type.
  // we set by default its value to null, since we cannot provide it any HTML DOM element ref before app is loaded.
  const nameRef = useRef<HTMLInputElement>(null); // connected to name input field with ref prop
  const ageRef = useRef<HTMLInputElement>(null); // connected to age input field
  const person1 = { name: "", age: 0 };

  // 2. UseState.
  //set the values onChange event of input fields. also put the value to the value property of inputs, this will make the inputs
  //controled components otherwise they are getting value from the DOM, after this they will be getting value from the state so will be in sync always.
  const [person, setPerson] = useState({ name: "", age: 0 });

  //UseState() vs UseRef()
  // re rendering is involved with UsState() webhook since state is being updated with every change but useRef is used in such a way
  //its value is only read when submit is clicked, that doesn't mean useState makes our Forms slow.

  // use type of parameter FormEvent either FormEvent<HTMLFormElement> the first one is more general so that's used.
  // we found the type by first writting the arrow function in form "onSubmit" and when we created parameter there without any type
  // and we hover over the event parameter, we can see the type is "FormEvent<HTMLFormElement>" and then we wrote that type here in a sperate method.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //accessing the value of name input
    if (nameRef.current !== null) {
      person1.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person1.age = parseInt(ageRef.current.value);
    }
    console.log(person1);

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" ref={nameRef} type="text" className="form-control" />
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name2"
          type="text"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" ref={ageRef} type="number" className="form-control" />
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age2"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormBasics;
