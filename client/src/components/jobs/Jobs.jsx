import React from "react";
import {
  FormInput,
  Button,
  Divider,
  UpdateForm,
  Confirmation,
  PriorityLabel,
} from "../";
import "./jobs.scss";
import { useJobs } from "../../hooks";

const arrows = {
  ASC: "▲",
  DESC: "▼",
};

const Jobs = () => {
  const {
    jobs,
    deleteHandler,
    updateJobId,
    setUpdateJobId,
    deleteJobId,
    setDeleteJobId,
    priorities,
    search,
    setSearch,
    sort,
    setSort,
    filter,
    setFilter,
  } = useJobs();

  const sortHandler = (field) => {
    let tempSort = { ...sort };
    if (tempSort.field === field) {
      tempSort.type = sort.type === "ASC" ? "DESC" : "ASC";
    } else {
      tempSort = { field: field, type: "ASC" };
    }
    setSort(tempSort);
  };

  return (
    <div className="o-jobs">
      <div className="o-header">
        <h3 className="o-title">JOBS</h3>
      </div>
      <table className="o-table">
        <thead>
          <tr className="o-filters">
            <th colSpan={3}>
              <div className="o-filter-wrapper">
                <div className="o-search">
                  <FormInput>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="o-element"
                      value={search}
                      onInput={(e) => setSearch(e.target.value)}
                    />
                  </FormInput>
                </div>
                <div className="o-filter">
                  <FormInput>
                    <select
                      className="o-element"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="">All</option>
                      {priorities.map((p) => {
                        return (
                          <option key={p.id} value={p.id}>
                            {p.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormInput>
                </div>
              </div>
            </th>
          </tr>

          <tr>
            <th>
              <div className="o-sortable" onClick={() => sortHandler("title")}>
                Title {sort.field === "title" ? arrows[sort.type] : ""}
              </div>
            </th>
            <th>
              <div
                className="o-sortable"
                onClick={() => sortHandler("priority")}
              >
                Priority {sort.field === "priority" ? arrows[sort.type] : ""}
              </div>
            </th>
            <th className="o-fixed">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length ? (
            jobs.map((job) => {
              if (search) {
                const isSearchFound = job.title.includes(search);
                if (!isSearchFound) {
                  return null;
                }
              }

              if (filter) {
                if (job.priority.toString() !== filter.toString()) {
                  return null;
                }
              }

              const priority = priorities.find(
                (item) => item.id === job.priority
              );

              return (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>
                    <PriorityLabel priority={priority} />
                  </td>
                  <td className="o-fixed">
                    <Button
                      size="small"
                      appearance="danger"
                      onClick={() => setDeleteJobId(job.id)}
                    >
                      Delete
                    </Button>
                    <Divider size={5} direction="horizontal" />
                    <Button
                      size="small"
                      appearance="primary"
                      onClick={() => setUpdateJobId(job.id)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3} className="o-center">
                There is no job item.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {updateJobId ? (
        <UpdateForm
          jobId={updateJobId}
          onClose={() => {
            setUpdateJobId(null);
          }}
        />
      ) : (
        ""
      )}

      {deleteJobId ? (
        <Confirmation
          title="Delete"
          msg="Are you sure want to delete this job?"
          onClose={() => setDeleteJobId(null)}
          onConfirm={deleteHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Jobs;
