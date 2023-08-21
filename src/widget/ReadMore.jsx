import { useState } from "react";
import { Typography } from "@mui/material";

export const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <Typography className="text">
      {isReadMore ? children.slice(0, 100) : children}
      <span onClick={() => setIsReadMore(!isReadMore)}>
        <b>{isReadMore ? "...read more" : " show less"}</b>
      </span>
    </Typography>
  );
};
