//This code snippet is generated using quick Snippet Command "RAFCE"
//Before this install the extension "ES7+ React/Redux/React-Native snippets"
import React, { ReactNode } from "react";

interface Props {
  //This is a inbuilt prop if we name a prop like "children" the content will not be taken as Prop but will be inisde tages like
  //other props <Alert text="hello World">
  //"children" prop <Alert>Hello World<Alert/>
  //Its type is ReactNode so it also accepts Html tags, we can use string as type here as well, in that case on string will be allowed as child to this component.
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
