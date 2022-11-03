import { useDispatch, useSelector } from "react-redux";
import { updateJob } from "../redux/features/jobSlice";

/**
 * This hook is to update the priority value from the onSubmit
 * method to the store and also returns the priority list
 * @author   TevratGundogdu
 * @param    {String} jobId   jobId to update
 * @return   {Object}   currentJob object priorities and onSubmit
 */

const useUpdateForm = (jobId) => {
  const dispatch = useDispatch();
  const priorities = useSelector((state) => state.jobs.priorities);
  const currentJob = useSelector((state) => {
    return state.jobs.data.find((job) => job.id === jobId);
  });

  const onSubmit = (values) => {
    const payload = {
      jobId: jobId,
      priority: parseInt(values.priority, 10),
    };
    dispatch(updateJob(payload));
  };

  return { onSubmit, priorities, currentJob };
};

export default useUpdateForm;
