import { useState } from "react";

/**
 * This hook performs validations according to the validate method.
 * Executes the callback method when validations are successful.
 * @author   TevratGundogdu
 * @param    {Method} callback   The method to run when validation is successful.
 * @param    {Method} validate   The method that does the validations
 * @return   {Object}   values, errors and handlers
 */

const useValidation = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateResult = validate(values);
    setErrors(validateResult);
    setIsSubmitted(true);
    if (Object.keys(validateResult).length === 0) {
      callback();
    }
  };

  const handleChange = (event) => {
    setValues((values) => {
      const newValues = { ...values, [event.target.name]: event.target.value };
      if (isSubmitted) {
        setErrors(validate(newValues));
      }
      return newValues;
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setIsSubmitted,
  };
};

export default useValidation;
