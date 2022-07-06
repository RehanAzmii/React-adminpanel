import React from "react";

const Headerleft = () => {
    return(
        <div>
                  <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="logo.png" alt="" />
          <span className="d-none d-lg-block">NiceAdmin</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
        </div>
    )
}
export default Headerleft