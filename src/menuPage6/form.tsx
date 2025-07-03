// import { useState } from "react";

interface FormProps {
  controlPage?: number;
}
export default function Form(props: FormProps) {
  // const [typePage, setTypePage] = useState<number>(1 | 2);
  return (
    <>
      {props.controlPage === 1 ? (
        <>
          <h1>Form</h1>
          <p>This is the form page.</p>
          <p>Here you can add your form components.</p>
        </>
      ) : (
        <>
          {/* You can put alternative content here */}
          <h1>Other Page</h1>
          <p>This is not the form page.</p>
        </>
      )}
    </>
  );
}
