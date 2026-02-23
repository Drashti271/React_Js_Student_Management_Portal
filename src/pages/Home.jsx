import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="d-flex">
      <div className="w-100">
        {/* Dashboard Content */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow text-center p-3">
                <h5>Total Students</h5>
                <h2 className="text-primary">120</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow text-center p-3">
                <h5>Active Students</h5>
                <h2 className="text-success">95</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow text-center p-3">
                <h5>Pending Fees</h5>
                <h2 className="text-danger">25</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
