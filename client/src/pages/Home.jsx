import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PriorityServices } from "../service";
import { CreateForm, Jobs } from "../components";
import { fillJobs, setPriorities } from "../redux/features/jobSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const loadPriorities = () => {
    PriorityServices.getPriorities()
      .then((response) => {
        dispatch(setPriorities(response));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
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
  ) : (
    <>
      <CreateForm />
      <Jobs />
    </>
  );
};

export default Home;
