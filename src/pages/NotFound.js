import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen flex flex-col justify-center items-center text-black">
        <div style={{ fontSize: "150px" }}>ERROR 404</div>
        <div className="text-3xl">
          <Link to="/" replace>
            Take Me Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
