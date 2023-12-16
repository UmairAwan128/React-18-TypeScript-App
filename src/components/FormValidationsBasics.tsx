import { FieldValues, useForm } from "react-hook-form";

//This is interface is defining the shape of this Form, or fields in it, this good for better development experience and intellisense.
//ByConvention we name it "FormData"
interface FormData {
  name: string;
  age: number;
}

const FormValidationsBasics = () => {
  //We are using here React-hook-Form, you can console.log  useForm() returns us properties and methods, like to register inputs with react hook field
  // get the input, handle submit, validations and so many things that can be used to control forms.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // we have put here the type or interface "FormData", that represemts the shape of form, this supports intellisense. when accessing objects like "errors"

  // try console.log(formState) from useForm, this object tells the state of form or fields like if there are any validation errors.
  // it has an errors object having all the errors in the form, depending on the validation that we defined the fields.
  // For now we just need "errors" object so we destructured it out from the "formState" object.
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/*   // try console log,   //console.log(register('name'));
          //the register method with any property name, it returns us 4 properties and methods, like name, onBlur, onChange and ref property as well, means it uses useRef() hook.
          // We have been placing all these manually in previously in FormBasics.tsx, so now we will just use register with spread operator and it will create all these on
          //on the respective input field for us like we did below on every field. so run time it will have all the proprties auto injected to it like name,ref,onchange() and onBlur. which we can handle 
          // ...register('name')
      */}
        {/*   // as a second argument to register() we can pass an object with HTML attributes for data validations, like required,min,max
         */}
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* "errors" object is destructured out from the "formState" object, in which the errors in the form fields are populated based on the validation we have
        defined some validations like required and minLength, these props will also be the type of error with which we can identify the error and then we are showing a custom message to user. */}
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {/* so read it lie if we have an error for 'name' field and type of the error is minlength then show this error message */}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
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

export default FormValidationsBasics;
