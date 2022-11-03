import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob } from "../redux/features/jobSlice";

/**
 * This hook sorts the job list from store.
 * It Handles the search variable and method.
 * It handles update and delete modals. And delete handler
 * It Handles deleting jobs from the Store.
 * @author   TevratGundogdu
 * @return   {Object}   jobs, priorities, search and handlers
 */

const useJobs = () => {
  const dispatch = useDispatch();
  const jobsData = useSelector((state) => state.jobs.data);
  const priorities = useSelector((state) => state.jobs.priorities);
  const [updateJobId, setUpdateJobId] = useState(null);
  const [deleteJobId, setDeleteJobId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState({ field: "priority", type: "ASC" });
  const [jobs, setJobs] = useState([]);

  const deleteHandler = () => {
    dispatch(deleteJob(deleteJobId));
    setDeleteJobId(null);
  };

  useEffect(() => {
    const sortJobs = [...jobsData];
    if (sort.field === "title") {
      if (sort.type === "DESC") {
        sortJobs.sort((a, b) => ("" + b.title).localeCompare(a.title));
      } else {
        sortJobs.sort((a, b) => ("" + a.title).localeCompare(b.title));
      }
    } else {
      if (sort.type === "DESC") {
        sortJobs.sort((a, b) => b.priority - a.priority);
      } else {
        sortJobs.sort((a, b) => a.priority - b.priority);
      }
    }
    setJobs(sortJobs);
  }, [sort, jobsData]);

  return {
    jobs,
    updateJobId,
    setUpdateJobId,
    deleteJobId,
    setDeleteJobId,
    deleteHandler,
    priorities,
    search,
    setSearch,
    sort,
    setSort,
    filter,
    setFilter,
  };
};

export default useJobs;
