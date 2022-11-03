/**
 * This method validates the priority field within the values.
 * @author   TevratGundogdu
 * @param    {Object} values   List of objects to validate
 * @return   {Object} errors list
 */

const validate = (values) => {
  let errors = {};

  if (!values.priority) {
    errors.priority = "Priority is required.";
  }

  return errors;
};

export default validate;
