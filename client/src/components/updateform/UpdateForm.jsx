import React from 'react';
import { Modal, Button, Divider, FormInput } from "../";
import { updateValidation } from "../../validations";
import { useUpdateForm, useValidation } from "../../hooks";
import { useEffect } from "react";

const UpdateForm = ({ jobId, onClose }) => {
  const { onSubmit, priorities, currentJob } = useUpdateForm(jobId);

  const submitHandler = () => {
    onSubmit(values);
    setValues({});
    setIsSubmitted(false);
    onClose();
  };

  const {
    values,
    setValues,
    errors,
    handleSubmit,
    handleChange,
    setIsSubmitted,
  } = useValidation(submitHandler, updateValidation);

  useEffect(() => {
    setValues({ priority: currentJob.priority });
  }, []);

  return (
    <Modal shown={true} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>
          <h3>Update</h3>
          <Button size="small" onClick={onClose}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <FormInput
            label="Job">
            <input className='o-element' defaultValue={currentJob.title} disabled/>
          </FormInput>
          <Divider />
          <FormInput
            label="Priority"
            error={errors.priority ? true : false}
            errorMessage={errors.priority}
          >
            <select
              className="o-element"
              value={values.priority || ""}
              onChange={handleChange}
              name="priority"
            >
              <option value="">Select...</option>
              {priorities.map((priority) => {
                return (
                  <option key={priority.id} value={priority.id}>
                    {priority.label}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <Divider />
        </Modal.Body>
        <Modal.Footer>
          <div></div>
          <div>
            <Button onClick={onClose}>Cancel</Button>
            <Divider direction="horizontal" size={5} />
            <Button appearance="primary">Update</Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UpdateForm;
