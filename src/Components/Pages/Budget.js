import React from "react";

const Budget = () => {
  return (
    <div>
      <div className="card">
        <div className="filter">
          <a className="icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Today
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Month
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Year
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body pb-0">
          <h5 className="card-title">
            Budget Report <span>| This Month</span>
          </h5>

          <div
            id="budgetChart"
            style={{ minheight: "400px" }}
            className="echart"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Budget;
