import React from "react";

const Revenue = () => {
    return(
        <div>
                 <div className="card-body">
                        <h5 className="card-title">
                          Revenue <span>| This Month</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">
                              8%
                            </span>
                            <span className="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
        </div>
    )
}
export default Revenue