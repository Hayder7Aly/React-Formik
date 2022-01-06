import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
         <Field name={name} id={name} as="select" {...rest}>
            {
              options.map((option,idx) => {
                return <option key={idx} value={option.value}>{option.key}</option>
              })
            }
         </Field>
         <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;