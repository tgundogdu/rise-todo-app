import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: { data: [], priorities: [] },
  reducers: {
    fillJobs: (state, action) => {
      state.data = [...action.payload];
    },
    addJob: (state, action) => {
      const job = action.payload;
      job.id = uuid();
      state.data.push(job);
      localStorage.setItem("jobs", JSON.stringify(state.data));
    },
    deleteJob: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      localStorage.setItem("jobs", JSON.stringify(state.data));
    },
    updateJob: (state, action) => {
      const { jobId, priority } = action.payload;
      const index = state.data.findIndex((item) => item.id === jobId);
      state.data[index].priority = priority;
      localStorage.setItem("jobs", JSON.stringify(state.data));
    },
    setPriorities: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { fillJobs, addJob, deleteJob, updateJob, setPriorities } =
  jobSlice.actions;

export default jobSlice.reducer;
