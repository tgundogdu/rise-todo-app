import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PriorityServices } from "../service";
import { CreateForm, Jobs } from "../components";
import { fillJobs, setPriorities } from "../redux/features/jobSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPriorities = () => {
    PriorityServices.getPriorities()
      .then((response) => {
        dispatch(setPriorities(response.data));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const msg =
          error?.data?.message ||
          "Priority service not working. Please run backend app in server file.";
        setError(msg);
      });
  };

  const loadJobsFromStorage = () => {
    try {
      let d = JSON.parse(localStorage.getItem("jobs"));
      dispatch(fillJobs(d));
    } catch (error) {
      console.log("Jobs cannot load from localstorage. Error: " + error);
    }
  };

  useEffect(() => {
    loadPriorities();
    loadJobsFromStorage();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : error ? (
    <div className="error-msg">{error}</div>
  ) : (
    <>
      <CreateForm />
      <Jobs />
    </>
  );
};

export default Home;
