import React from "react";

const Recentsell = () => {
    return(
        <div>
                <div className="card-body">
                        <h5 className="card-title">
                          Recent Sales <span>| Today</span>
                        </h5>

                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <a href="#">#2457</a>
                              </th>
                              <td>Brandon Jacob</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At praesentium minu
                                </a>
                              </td>
                              <td>$64</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2147</a>
                              </th>
                              <td>Bridie Kessler</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Blanditiis dolor omnis similique
                                </a>
                              </td>
                              <td>$47</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2049</a>
                              </th>
                              <td>Ashleigh Langosh</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At recusandae consectetur
                                </a>
                              </td>
                              <td>$147</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2644</a>
                              </th>
                              <td>Angus Grady</td>
                              <td>
                                <a href="#" className="text-primar">
                                  Ut voluptatem id earum et
                                </a>
                              </td>
                              <td>$67</td>
                              <td>
                                <span className="badge bg-danger">
                                  Rejected
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2644</a>
                              </th>
                              <td>Raheem Lehner</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Sunt similique distinctio
                                </a>
                              </td>
                              <td>$165</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
        </div>
    )
}
export default Recentsell