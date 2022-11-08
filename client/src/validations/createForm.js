/**
 * This method validates the title and priority fields within the values.
 * @author   TevratGundogdu
 * @param    {Object} values   List of objects to validate
 * @return   {Object} errors list
 */

const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = "Job title is required.";
  } else if (!/^.{1,70}$/.test(values.title)) {
    errors.title = "Job title should be max 255 char.";
  } else if (!/^[a-zA-Z0-9 ]+$/.test(values.title))
    errors.title = "Only alphanumeric characters acceptable";

  if (!values.priority) {
    errors.priority = "Priority is required.";
  }

  return errors;
};

export default validate;
