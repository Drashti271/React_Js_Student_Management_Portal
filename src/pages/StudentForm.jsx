import React, { useState } from "react";

const StudentForm = ({student , handleChange , handleSubmit}) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h4 className="mb-3 text-center">{student.id ? "Edit Student" : "Add Student"}</h4>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={student.fullName || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={student.email || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Mobile */}
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={student.mobile || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Course */}
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <input
                    type="text"
                    name="course"
                    value={student.course || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Batch */}
                <div className="mb-3">
                  <label className="form-label">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={student.batch || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={student.address || ""}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {student.id ? "Update Student" : "Add Student"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
