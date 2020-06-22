import React, { Fragment } from "react";
import tenor from "./tenor.gif";

export default () => (
  <Fragment>
    <img
      src={tenor}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </Fragment>
);
