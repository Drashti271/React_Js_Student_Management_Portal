import React, { useState } from "react";

const Attendance = ({ list }) => {

  const [selectedDate, setSelectedDate] = useState("");
  const [attendance, setAttendance] = useState({});

  const handleChange = (id, status) => {
    setAttendance({
      ...attendance,
      [id]: status,
    });
  };

  const handleSubmit = () => {
    if (!selectedDate) {
      alert("Please select a date!");
      return;
    }

    const finalData = list.map((student) => ({
      studentId: student.id,
      name: student.fullName,
      date: selectedDate,
      status: attendance[student.id] || "Absent",
    }));

    const existingData =
      JSON.parse(localStorage.getItem("attendanceData")) || [];

    const filteredOldData = existingData.filter(
      (item) => item.date !== selectedDate
    );

    const updatedData = [...filteredOldData, ...finalData];

    localStorage.setItem("attendanceData", JSON.stringify(updatedData));

    alert("Attendance Saved Successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mark Attendance</h2>

      <div className="mb-3">
        <label className="form-label">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student) => (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td>
                <input
                  type="radio"
                  name={`attendance-${student.id}`}
                  onChange={() => handleChange(student.id, "Present")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`attendance-${student.id}`}
                  onChange={() => handleChange(student.id, "Absent")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendance;
