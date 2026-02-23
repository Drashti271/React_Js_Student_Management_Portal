import React, { useState } from "react";

const Test = ({ list }) => {
  const [testData, setTestData] = useState({
    studentId: "",
    testName: "",
    date: "",
    subject1: "",
    subject2: "",
    subject3: "",
  });

  const [testList, setTestList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestData({ ...testData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total =
      Number(testData.subject1) +
      Number(testData.subject2) +
      Number(testData.subject3);

    const percentage = total / 3;

    let grade = "";
    if (percentage >= 80) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 40) grade = "C";
    else grade = "Fail";

    const selectedStudent = list.find(
      (stu) => String(stu.id) === testData.studentId,
    );

    const newTest = {
      studentName: selectedStudent?.fullName,
      testName: testData.testName,
      date: testData.date,
      total,
      percentage: percentage.toFixed(2),
      grade,
    };

    setTestList([...testList, newTest]);

    setTestData({
      studentId: "",
      testName: "",
      date: "",
      subject1: "",
      subject2: "",
      subject3: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Assign Test</h3>

        <form onSubmit={handleSubmit}>
          {/* Student Dropdown */}
          <div className="mb-3">
            <label>Select Student</label>
            <select
              name="studentId"
              className="form-control"
              value={testData.studentId}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Student --</option>
              {list.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label>Test Name</label>
            <input
              type="text"
              name="testName"
              className="form-control"
              value={testData.testName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Test Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={testData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Subject 1</label>
            <input
              type="number"
              name="subject1"
              className="form-control"
              value={testData.subject1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Subject 2</label>
            <input
              type="number"
              name="subject2"
              className="form-control"
              value={testData.subject2}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Subject 3</label>
            <input
              type="number"
              name="subject3"
              className="form-control"
              value={testData.subject3}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100">Assign Test</button>
        </form>
      </div>

      {/* Result Table */}
      {testList.length > 0 && (
        <div className="card mt-4 p-3 shadow">
          <h4>Assigned Tests</h4>
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Student</th>
                <th>Test</th>
                <th>Date</th>
                <th>Total</th>
                <th>%</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {testList.map((item, index) => (
                <tr key={index}>
                  <td>{item.studentName}</td>
                  <td>{item.testName}</td>
                  <td>{item.date}</td>
                  <td>{item.total}</td>
                  <td>{item.percentage}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Test;
