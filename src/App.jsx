import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import StudentForm from "./pages/StudentForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ViewStudent from "./pages/ViewStudent";
import Attendance from "./pages/Attendance";
import ViewAttendance from "./pages/ViewAttendance";
import Test from "./pages/Test";
import Login from "./pages/Login";

const App = () => {
  const [student, setStudent] = useState({});
  const [list, setList] = useState(() => {
    const savedData = localStorage.getItem("students");
    return savedData ? JSON.parse(savedData) : [];
  });

  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredList =
    searchTerm.trim() === ""
      ? list
      : list.filter(
          (item) =>
            item.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.course?.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    if (isSubmitted) {
      navigator("/view");
      setIsSubmitted(false);
    }
  }, [list]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedList;

    if (student.id) {
      updatedList = list.map((item) =>
        item.id === student.id ? student : item,
      );
    } else {
      updatedList = [...list, { ...student, id: Date.now() }];
    }

    setList(updatedList);
    setStudent({});
    setSearchTerm("");
    setIsSubmitted(true);
  };

  const handleDelete = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setStudent(data);
    navigator("/form");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="w-100">
                <Header handleSearch={handleSearch} />
                <div className="container mt-4">
                  <Home />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/form"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="w-100">
                <Header handleSearch={handleSearch} />
                <div className="container mt-4">
                  <StudentForm
                    student={student}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/view"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="w-100">
                <Header handleSearch={handleSearch} />
                <div className="container mt-4">
                  <ViewStudent
                    list={filteredList}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/attendance"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="w-100">
                <Header handleSearch={handleSearch} />
                <div className="container mt-4">
                  <Attendance list={list} />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/viewAttendance"
          element={
            <div className="d-flex">
              <Sidebar/>
              <div className="w-100">
                <Header/>
                <div className="container mt-4">
                  <ViewAttendance />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/test"
          element={
            <div className="d-flex">
              <Sidebar/>
              <div className="w-100">
                <Header/>
                <div className="container mt-4">
                  <Test list={list} />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
