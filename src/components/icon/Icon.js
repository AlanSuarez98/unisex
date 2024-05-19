import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({ icon, css }) => {
  return <FontAwesomeIcon icon={icon} css={css} />;
};

export default Icon;
