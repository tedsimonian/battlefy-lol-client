import React from "react";
import { Link } from "react-router-dom";

// not found page.
// Any users trying to access the wrong path on the front end will see this component rendered
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
