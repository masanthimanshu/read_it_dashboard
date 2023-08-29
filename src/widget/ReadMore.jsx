import { useState } from "react";
import { Typography } from "@mui/material";

export const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <Typography>
      {isReadMore ? children.slice(0, 75) : children}
      <span
        style={{ color: "blue" }}
        onClick={() => setIsReadMore(!isReadMore)}
      >
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </Typography>
  );
};
