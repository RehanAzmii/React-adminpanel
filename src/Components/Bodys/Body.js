import React from "react";
import Header from "../Headers/Header";
import Sidebar from "../Pages/Sidebar";
import Dashboard from "./Dashboard";
import Revenue from "./Revenue";
import Sales from "./Sales";
import Customers from "./Customer"
import Report from "./Report";
import Recentsell from "./Recentsell";
import Topselling from "./Topselling";
import Sidebarright from "../Pages/Sidebarright";
import Budget from "../Pages/Budget";
import Website from "../Pages/Website";
import News from "../Pages/New";
import Footer from "../Footers/Footer";

const Body = () => {
  return (
    <div>
      <body>
        {/* <!-- ======= Header ======= --> */}
        <Header />
        {/* <!-- End Header --> */}

        {/* <!-- ======= Sidebar ======= --> */}
        <Sidebar />
        {/* <!-- End Sidebar--> */}

        <main id="main" className="main">
          <Dashboard />
          {/* <!-- End Page Title --> */}

          <section className="section dashboard">
            <div className="row">
              {/* <!-- Left side columns --> */}
              <div className="col-lg-8">
                <div className="row">
                  {/* <!-- Sales Card --> */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
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

                     <Sales/>
                    </div>
                  </div>
                  {/* <!-- End Sales Card --> */}

                  {/* <!-- Revenue Card --> */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
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

                     <Revenue/>
                    </div>
                  </div>
                  {/* <!-- End Revenue Card --> */}

                  {/* <!-- Customers Card --> */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
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

                  <Customers/>
                    </div>
                  </div>
                  {/* <!-- End Customers Card --> */}

                  {/* <!-- Reports --> */}
                  <div className="col-12">
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

                      <Report/>
                    </div>
                  </div>
                  {/* <!-- End Reports --> */}

                  {/* <!-- Recent Sales --> */}
                  <div className="col-12">
                    <div className="card recent-sales overflow-auto">
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

                      <Recentsell/>
                    </div>
                  </div>
                  {/* <!-- End Recent Sales --> */}

                  {/* <!-- Top Selling --> */}
                 <Topselling/>
                  {/* <!-- End Top Selling --> */}
                </div>
              </div>
              {/* <!-- End Left side columns --> */}

              {/* <!-- Right side columns --> */}
              <div className="col-lg-4">
                {/* <!-- Recent Activity --> */}
               <Sidebarright/>
                {/* <!-- End Recent Activity --> */}

                {/* <!-- Budget Report --> */}
               <Budget/>
                {/* <!-- End Budget Report --> */}

                {/* <!-- Website Traffic --> */}
               <Website/>
                {/* <!-- End Website Traffic --> */}

                {/* <!-- News & Updates Traffic --> */}
              <News/>
                {/* <!-- End News & Updates --> */}
              </div>
              {/* <!-- End Right side columns --> */}
            </div>
          </section>
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
       <Footer/>
        {/* <!-- End Footer --> */}

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </div>
  );
};
export default Body;
