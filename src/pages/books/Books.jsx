import { Link } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { BooksData } from "../../components/books/BooksData";
import {
  Box,
  Table,
  Button,
  Divider,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";

export const Books = () => {
  return (
    <Sidebar>
      <Box display="flex" justifyContent="flex-end">
        <Link to="/add-book">
          <Button variant="contained" color="primary">
            + &nbsp; Add Book
          </Button>
        </Link>
      </Box>
      <br />
      <Divider />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>S.No.</b>
            </TableCell>
            <TableCell>
              <b>Book Name</b>
            </TableCell>
            <TableCell>
              <b>Author</b>
            </TableCell>
            <TableCell>
              <b>Genre</b>
            </TableCell>
            <TableCell>
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <BooksData index={1} name="John Doe" author="Delhi" genre="Male" />
          <BooksData index={2} name="John Doe" author="Delhi" genre="Male" />
        </TableBody>
      </Table>
    </Sidebar>
  );
};
