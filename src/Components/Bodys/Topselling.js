import React from "react";

const Topselling = () => {
  return (
    <div>
      <div className="col-12">
        <div className="card top-selling overflow-auto">
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
              Top Selling <span>| Today</span>
            </h5>

            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="product-1.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Ut inventore ipsa voluptas nulla
                    </a>
                  </td>
                  <td>$64</td>
                  <td className="fw-bold">124</td>
                  <td>$5,828</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="product-2.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Exercitationem similique doloremque
                    </a>
                  </td>
                  <td>$46</td>
                  <td className="fw-bold">98</td>
                  <td>$4,508</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="product-3.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Doloribus nisi exercitationem
                    </a>
                  </td>
                  <td>$59</td>
                  <td className="fw-bold">74</td>
                  <td>$4,366</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="product-4.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Officiis quaerat sint rerum error
                    </a>
                  </td>
                  <td>$32</td>
                  <td className="fw-bold">63</td>
                  <td>$2,016</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="product-5.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Sit unde debitis delectus repellendus
                    </a>
                  </td>
                  <td>$79</td>
                  <td className="fw-bold">41</td>
                  <td>$3,239</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topselling;
