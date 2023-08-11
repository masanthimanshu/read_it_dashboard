import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Box, TextField, Button, Grid } from "@mui/material";

export const AddBook = () => {
  const [author, setAuthor] = useState("");
  const [bookName, setBookName] = useState("");

  const handleSubmit = () => {};

  return (
    <Sidebar>
      <Box m={5}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <TextField
                value={bookName}
                label="Book Name"
                onChange={(e) => setBookName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                value={author}
                label="Author Name"
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <Box textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            &nbsp; &nbsp;
            <Link to="/books">
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Sidebar>
  );
};
