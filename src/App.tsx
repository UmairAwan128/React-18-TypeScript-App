import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ImPureComponent from "./components/ImPureComponent";
import StateSupportedTypes from "./components/StateSupportedTypes";
import ExpandableText from "./components/ExpandableText";
import Navbar from "./components/ShoppingCartApp/Navbar";
import Cart from "./components/ShoppingCartApp/Cart";
import Form from "./components/Form";
import FormBasics from "./components/FormBasics";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { date } from "zod";

function App() {
  // 11. ------------- Expense Tracker "Mini Project" ---------------------------------
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 20, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpensives = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* onSubmit - spread all the expenses then add a new expense at the end, inside that object since it doesn't had id so we spreaded that new expense as well and added the id with largest value */}
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>

      <ExpenseList
        expenses={visibleExpensives}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </div>
  );

  // //10. Form
  // return (
  //   <div>
  //     <Form />
  //   </div>
  // );

  //9. Basics of Form
  // return (
  //   <div>
  //     <FormBasics />
  //   </div>
  // );

  // //8. Simple Shoping Cart app with Navbar and Cart component sharing an external state that is in parent, Cart showing items and Navbar showing count of items.
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // return (
  //   <div>
  //     <Navbar cartItemsCount={cartItems.length} />
  //     {/* Empty the shopping cart onClear event. */}
  //     <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
  //   </div>
  // );

  // 7. Building an ExpanadableText component which is managing state internally
  // return (
  //   <div>
  //     <ExpandableText maxChars={100}>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas
  //       est nulla sunt ex dolor perspiciatis rerum magnam quia laborum sapiente
  //       eos, cum cupiditate recusandae ea, ullam officiis praesentium deserunt
  //       commodi eligendi. Minus expedita modi facere assumenda sit officiis quas
  //       est vitae! Suscipit nemo iure dolor veritatis quas? Recusandae, culpa
  //       debitis veritatis quisquam est ad amet neque voluptatem in doloremque ab
  //       similique pariatur sunt? Temporibus, nostrum quam. Sapiente, adipisci
  //       modi nulla eum enim blanditiis aut eos hic provident eius! Aliquid
  //       incidunt numquam doloribus harum magni blanditiis ratione exercitationem
  //       totam sunt dolores corrupti natus assumenda, quae non deserunt quo
  //       ducimus error!
  //     </ExpandableText>
  //   </div>
  // );

  //6. State Object with multiple props
  // return (
  //   <div>
  //     <StateSupportedTypes />
  //   </div>
  // );

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
