import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { TableRow, TableCell, IconButton } from "@mui/material";

export const BooksData = ({ index, name, author, genre }) => {
  return (
    <TableRow key={index}>
      <TableCell>{index}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>{genre}</TableCell>
      <TableCell>
        <Link to="/edit-book/1">
          <IconButton>
            <Edit color="primary" />
          </IconButton>
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <IconButton onClick={() => alert("Delete Clicked")}>
          <Delete color="primary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
