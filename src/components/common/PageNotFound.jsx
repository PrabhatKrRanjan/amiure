import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="text-center text-danger">
            <div className="display-3 p-5">Page Not Found</div>
            <Link to="/login">Click Here to Get Back to Home Page</Link>
        </div>
      </div>
    );
  }
}
