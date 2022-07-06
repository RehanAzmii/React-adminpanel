import React from "react";
import Headerleft from "./Headerleft";
import Headerright from "./Headerright";
import Headersearch from "./Headersearch";

const Header = () => {
    return(
        <div>
              <header id="header" className="header fixed-top d-flex align-items-center">
            <Headerleft/>
      {/* <!-- End Logo --> */}

     <Headersearch/>
      {/* <!-- End Search Bar --> */}

      <Headerright/>
      {/* <!-- End Icons Navigation --> */}
    </header>
        </div>
    )
}
export default Header