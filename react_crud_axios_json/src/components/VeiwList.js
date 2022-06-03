import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getdata, deletedata } from "../utils/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewList = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getdata()
      .then((response) => {
        setResult([...response]);
      })
      .catch((error) => {
        toast.error(error);
        setError(error);
      });
  }, []);
  const deleteit = (id) => {
    deletedata(id)
      .then((res) => {
        if (res === "OK") {
          toast.success("Data Deleted Successfully 😍😍😍");
          getdata()
            .then((response) => {
              setResult([...response]);
            })
            .catch((error) => {
              toast.success(error);
            });
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div id="table">
      <ToastContainer />
      {result.length > 0 && !error && (
        <table>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number Of Questions</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {result.map((res, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.question}</td>
                <td>
                  <Link to={`/update/${res.id}`}>Update</Link>
                </td>
                <td>
                  <a
                    onClick={() => {
                      deleteit(res.id);
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
      )}
      {error && (
        <div>
          <p id="errorSec">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ViewList;
