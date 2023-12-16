//Created here this array and made it public and export so it can be imported in other files as well.
const categories = ["Groceries", "Utilities", "Entertainment"] as const; // here at the end we used "as const" this will actually create a const array, otherwise you will be able to use push() to add new element to array.

export default categories;