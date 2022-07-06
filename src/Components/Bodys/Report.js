import React from "react";

const Report = () => {
    return(
        <div>
            <div className="card-body">
                        <h5 className="card-title">
                          Reports <span>/Today</span>
                        </h5>

                        {/* <!-- Line Chart --> */}
                        <div id="reportsChart"></div>

                        {/* <!-- End Line Chart --> */}
                      </div>
        </div>
    )
}
export default Report