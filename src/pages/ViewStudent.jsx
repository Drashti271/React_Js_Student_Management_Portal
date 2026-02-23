import React from "react";

const ViewStudent = ({list , handleDelete , handleEdit}) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">Student List</h3>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Sr. No</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.fullName}</td>
              <td>{item.course}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ViewStudent;
