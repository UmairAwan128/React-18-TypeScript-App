import { MouseEvent, useState } from "react";

// this is to define shape of input or Props this component is going to need, we use interface for this
// Its name can be Just "Props" or "ListGroupProps" i.e. NameOfComponent followed by Props
interface Props {
  items: string[]; // use CamelCase
  heading: string;
  //function, convention : "on" followed by event like "SelectItem"
  // also define method defincation like this method will require a string param and returns void
  onSelectItem: (item: string) => void;
}

//Components should be all in components folder
//Use Pascal Case in naming
//As this Functional Component requires now a Props type object as input, the Type Script Compiler generates error where this component is used, these error will be generated right after you create props, not at run time
//this is another benifit of Type Script using with React.
function ListGroup({ items, heading, onSelectItem }: Props) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];
  const getMessage = () => {
    return items.length === 0 && <p>No Items found</p>;
  };

  //Handling Click Event - Convention Name is Like start with word "handle"
  //as TypeScript now function Parameters should have a type, benfit of this is now these parameters will have intellisense, or you will see list of methods or props
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
