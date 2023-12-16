//Before looking this file see FormBasics.tsx and FormValidationsBasics.tsx

//Validations in the form works after one submit of the form.

// for Zod and its integration with react-hook-form we installed following packages, the scond package contains resolvers for scheema based validation libraries like JOI and Zod in one place.
// npm i zod@3.20.6
//npm i @hookform/resolvers@2.9.11

import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod"; // this library is used to manage validations of a form in a clean way,
//it supports method chaining for building validation inside a object for each field, by convention we name the object "schema"
import { zodResolver } from "@hookform/resolvers/zod"; // for zod intgration with React-hook-forms

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

//if we are using Zod we don't need to define an interface seperatly Zod creates that for us from the schema, and we can get it with this code.
//for details related the interface see ForValidationBasics.tsx
type FormData = z.infer<typeof schema>;

const Form = () => {
  //We are using here React-hook-Form, you can console.log  useForm() returns us properties and methods, like to register inputs with react hook field
  // get the input, handle submit, validations and so many things that can be used to control forms.
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //isValid prop tell if the form is valid and does not have any validation errors.
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // we have put here the type or interface "FormData", that represemts the shape of form, this supports intellisense. when accessing objects like "errors"
  // we connected the Zod validation "scheema" object, with React-hook-form by using the zodResolver, and passing "schema" as parameter.

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* so read it lie if we have an error for 'name' field then show this error message, if configured it will show the configured message else it will show the default message */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* inside register() we passed second paramenter, { valueAsNumber: true } since we have to do for all input fields which require int input
           since value property of input always return string, so here we are telling react-hook-form that interpret this value as number */}
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
