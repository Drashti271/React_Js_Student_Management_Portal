import React, { useState, useEffect } from "react";

const ViewAttendance = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [storedData, setStoredData] = useState([]);

  // 🔥 Load attendance from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("attendanceData")) || [];
    setStoredData(data);
  }, []);

  // 🔎 Filter by selected date
  const filteredData = storedData.filter(
    (item) => item.date === selectedDate
  );

  // 📊 Statistics
  const totalStudents = filteredData.length;

  const presentCount = filteredData.filter(
    (item) => item.status === "Present"
  ).length;

  const absentCount = filteredData.filter(
    (item) => item.status === "Absent"
  ).length;

  const percentage =
    totalStudents > 0
      ? ((presentCount / totalStudents) * 100).toFixed(2)
      : 0;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">View Attendance</h2>

      {/* Date Filter */}
      <div className="mb-3">
        <label className="form-label">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Summary */}
      {totalStudents > 0 && (
        <div className="alert alert-info">
          <strong>Total:</strong> {totalStudents} |{" "}
          <strong>Present:</strong> {presentCount} |{" "}
          <strong>Absent:</strong> {absentCount} |{" "}
          <strong>Attendance %:</strong> {percentage}%
        </div>
      )}

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((student) => (
              <tr key={student.studentId}>
                <td>{student.name}</td>
                <td>
                  <span
                    className={`badge ${
                      student.status === "Present"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center text-danger">
                No Attendance Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
