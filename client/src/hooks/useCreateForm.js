import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../redux/features/jobSlice";

/**
 * This hook is to write the value from the onSubmit
 * @author   TevratGundogdu
 * @return   {Object}   form submit method and priorities
 */

const useCreateForm = () => {
  const dispatch = useDispatch();
  const priorities = useSelector((state) => state.jobs.priorities);

  const onSubmit = (values) => {
    values.priority = parseInt(values.priority, 10);
    dispatch(addJob(values));
  };

  return { onSubmit, priorities };
};

export default useCreateForm;
