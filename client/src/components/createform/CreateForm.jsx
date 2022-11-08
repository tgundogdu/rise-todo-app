import React from "react";
import "./createform.scss";
import { FormInput, Button, Divider } from "../";
import { createValidation } from "../../validations";
import { useCreateForm, useValidation } from "../../hooks";

const CreateForm = () => {
  const { onSubmit, priorities } = useCreateForm();

  const submitHandler = () => {
    onSubmit(values);
    setValues({});
    setIsSubmitted(false);
  };

  const {
    values,
    setValues,
    errors,
    handleSubmit,
    handleChange,
    setIsSubmitted,
  } = useValidation(submitHandler, createValidation);

  return (
    <form onSubmit={handleSubmit}>
      <h3>CREATE NEW JOB</h3>
      <div className="o-create-form">
        <div className="o-form">
          <FormInput
            label="Job"
            error={errors.title ? true : false}
            errorMessage={errors.title}
          >
            <input
              type="text"
              className="o-element"
              name="title"
              value={values.title || ""}
              onChange={handleChange}
            />
          </FormInput>
          <FormInput
            label="Priority"
            error={errors.priority ? true : false}
            errorMessage={errors.priority}
          >
            <select
              className="o-element"
              name="priority"
              onChange={handleChange}
              value={values.priority || ""}
            >
              <option value="">Select...</option>
              {priorities.map((priority) => {
                return (
                  <option value={priority.id} key={priority.id}>
                    {priority.label}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <FormInput label="&nbsp;">
            <Button appearance="success">Create</Button>
          </FormInput>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
